import {fetchWithoutToken, fetchWithToken} from "../helpers/fetch";
import {types} from "../types/types";
import Swal from "sweetalert2";
import {eventsClear} from "./events";

export const startLogin = (email, password) => {
    return async(dispatch) => {

        const resp = await fetchWithoutToken('auth', {email, password}, 'POST');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-create-date', new Date().getTime());

            dispatch(login({uid: body.uid, name: body.name}));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startRegister = (name, email, password) => {
    return async (dispatch) => {

        const resp = await fetchWithoutToken('auth/new', {name, email, password}, 'POST');
        const data = await resp.json();

        if (data.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-create-date', new Date().getTime());

            dispatch(login({uid: data.uid, name: data.name}));
        } else {
            Swal.fire('Error', data.msg, 'error');
        }

    }
}

const login = (user) => {
    return {
        type: types.AUTH_LOGIN,
        payload: user
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        const resp = await fetchWithToken('auth/renew', {});
        const data = await resp.json();

        if (data.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-create-date', new Date().getTime());

            dispatch(login({uid: data.uid, name: data.name}));
        } else {
            dispatch(checkingFinish());
        }

    }
}

const checkingFinish = () => {
    return {
        type: types.AUTH_CHECKING_FINISH
    }
}

export const startlogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        dispatch(eventsClear());
    }
}

const logout = () => {
    return {
        type: types.AUTH_LOGOUT
    }
}

