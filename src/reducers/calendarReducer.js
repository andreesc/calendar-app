import moment from "moment";
import {types} from "../types/types";

const initialState = {
    events: [],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.EVENT_SET_ACTIVE:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.EVENT_ADD_NEW:
            return {
                ...state,
                events: [action.payload, ...state.events]
            }
        case types.EVENT_CLEAR_ACTIVE:
            return {
                ...state,
                activeEvent: null
            }
        case types.EVENT_UPDATE:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id===action.payload.id) ? action.payload : e
                )
            }
        case types.EVENT_DELETE:
            return {
                ...state,
                events: state.events.filter(e => (e.id!==state.activeEvent.id)),
                activeEvent:  null
            }
        case types.EVENT_LOADED:
            return {
                ...state,
                events: [...action.payload]
            }
        case types.EVENTS_CLEAR_LOGOUT:
            return {
                ...state,
                activeEvent: null,
                events: []
            }
        default:
            return state;
    }

}