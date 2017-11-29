import constants from '../constants/index';

const init_state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null
}

export default function (state = init_state, action) {
    switch(action.type) {
        case constants.LOGIN_SUCCESS:
        return {...state, 
            isLoginSuccess: action.LOGIN_SUCCESS
        }

        case constants.LOGIN_PENDING:
        return {
            ...state,
            isLoginPending: action.LOGIN_PENDING
        }
        
        case constants.LOGIN_ERROR:
        return {
            ...state,
            isLoginError: constants.LOGIN_ERROR
        }
    }
    return state;
}