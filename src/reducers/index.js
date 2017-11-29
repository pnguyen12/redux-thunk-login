import { combineReducers } from 'redux';
import emailReducer from './EmailReducer';

const rootReducer = combineReducers({
  login: emailReducer
});

export default rootReducer;
