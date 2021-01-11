import {types} from "../types/types";

export const eventAddNew = (event) => {
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

export const eventUpdated = (event) => {
    return {
        type: types.EVENT_UPDATE,
        payload: event
    }
}

export const eventDeleted = (event) => {
    return {
        type: types.EVENT_DELETE,
        payload: event
    }
}