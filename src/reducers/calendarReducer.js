import moment from "moment";
import {types} from "../types/types";

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        user: {
            _id: '123',
            name: 'Andres'
        }
    }],
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
        default:
            return state;
    }

}