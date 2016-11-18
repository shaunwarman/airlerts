
export function login(user, callback) {
    const options = {
        credentials: 'include',
        headers: {
            Authorization: `Basic ${user}`,
        },
        method: 'POST',
        mode: 'cors'
    };

    fetch('http://localhost:8000/auth/login', options)
        .then(response => response.json())
        .then(json => callback(null, json))
        .catch(error => callback(new Error(error)));
}

export function preferences(callback) {
    const options = {
        credentials: 'include',
        method: 'POST',
        mode: 'cors'
    };

    fetch('http://localhost:8000/user/preferences', options)
        .then(response => response.json())
        .then(json => callback(null, json))
        .catch(error => callback(new Error(error)));
}
