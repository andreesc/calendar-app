import {types} from "../types/types";
import {fetchWithToken} from "../helpers/fetch";
import {prepareEvents} from "../helpers/prepare-events";
import Swal from "sweetalert2";

export const startEventAddNew = (event) => {
    return async(dispatch, getState) => {

        const {uid, name} = getState().auth;

        try {
            const resp = await fetchWithToken('events', event, 'POST');
            const body = await resp.json();

            if (body.ok){
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name
                }
                dispatch(eventAddNew(event));
            }

        } catch (e) {
            console.log(e);
        }


    };
}


const eventAddNew = (event) => {
    return {
        type: types.EVENT_ADD_NEW,
        payload: event
    }
}

export const eventSetActive = (event) => {
    return {
        type: types.EVENT_SET_ACTIVE,
        payload: event
    }
}

export const clearActiveEvent = () => {
    return {
        type: types.EVENT_CLEAR_ACTIVE
    }
}

export const startEventUpdate = (event) => {
    return async(dispatch) => {
        try {
            const resp = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(eventUpdated(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (e) {
            console.log(e);
        }


    }
}

const eventUpdated = (event) => {
    return {
        type: types.EVENT_UPDATE,
        payload: event
    }
}

export const startEventDeleted = () => {
    return async(dispatch, getState) => {

        const {id} = getState().calendar.activeEvent;

       try{
           const resp = await fetchWithToken(`events/${id}`, {}, 'DELETE');
           const body = await resp.json();

           if (body.ok) {
                dispatch(eventDeleted());
           } else {
               Swal.fire('Error', body.msg, 'error');
           }
       } catch (e){
           console.log(e);
       }

    }
}

export const eventDeleted = () => {
    return {
        type: types.EVENT_DELETE
    }
}

export const eventStartLoading = () => {
    return async(dispatch) => {

        const resp = await fetchWithToken('events', {});
        const body = await resp.json();

        const events = prepareEvents(body.events);

        if (body.ok) {
            dispatch(eventLoaded(events));
        }


    }
}

const eventLoaded = (events) => {
    return {
        type: types.EVENT_LOADED,
        payload: events
    }
}

export const eventsClear = () => {
    return {
        type: types.EVENTS_CLEAR_LOGOUT
    }
}