import constants from '../constants/index';

export default function (state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null
}, action)
 {
    switch(action.type) {
        case constants.LOGIN_SUCCESS:
        console.log("state" + state.isLoginPending);
        return Object.assign({}, state, {isLoginSuccess: action.isLoginSuccess})

        case constants.LOGIN_PENDING:
        return Object.assign({}, state, {isLoginPending: action.isLoginPending})
        
        case constants.LOGIN_ERROR:
      
        return Object.assign({}, state, {isLoginError: action.isLoginError})
        
        default: 
        return state
    }
}