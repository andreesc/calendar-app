const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchWithToken = (endpoint, data, method = 'GET') => {
    const url = `${API_BASE_URL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method==='GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'x-token': token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
    const url = `${API_BASE_URL}/${endpoint}`;

    if (method==='GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}