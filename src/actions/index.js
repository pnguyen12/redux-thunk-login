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
   
    // sendLoginRequest(email, password)
    // .then((success) => {
    //     dispatch(loginPending(false));
    //     dispatch(loginSuccess(true));
    // })

    // .catch((err) => {
    //     dispatch(isLoginPending(false));
    //     dispatch(loginError(err))
    // })

    sendLoginRequest(email, password, error => {
        dispatch(loginPending(false));
        if(!error) {
            dispatch(loginSuccess(true));
        } else {
            dispatch(loginError(error));
        }
    });
    }
}

const sendLoginRequest = (email, password, callback) => {
    setTimeout(() => {
        if(email === 'admin@admin.com' && password === 'password') {
            return callback(null);
        } 

        else {
            return callback(null);
        }
    })
}