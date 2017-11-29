import { combineReducers } from 'redux';
import emailReducer from './EmailReducer';

const rootReducer = combineReducers({
  loginForm: emailReducer
});

export default rootReducer;
