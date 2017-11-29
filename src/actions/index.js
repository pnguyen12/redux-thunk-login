import constants from '../constants/index';
import Promise from 'es6-promise';

const loginPending = (isLoginPending) => {
    return {
        type: constants.LOGIN_PENDING,
        isLoginPending
    }
}

const loginSuccess = (isLoginSuccess) =>  {
    return {
        type: constants.LOGIN_SUCCESS,
        isLoginSuccess
    }
}

const loginError = (isLoginError) => {
    return {
        type: constants.LOGIN_ERROR,
        isLoginError
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginPending(true));
        dispatch(loginSuccess(false));
        dispatch(loginError(null));
    },

    sendLoginRequest(email, password)
    .then((success) => {
        dispatch(loginPending(false));
        dispatch(loginSuccess(true));
    })

    .catch((err) => {
        dispatch(isLoginPending(false));
        dispatch(loginError(err))
    })
}

const sendLoginRequest = (email, password) => {
   return new Promise((resolve, reject) => {
    if(email === 'admin@admin.com' && password === 'password') {
       return resolve(true);
    } else {
       return reject(new Error('Invalid password or email'));
    }
   })
}