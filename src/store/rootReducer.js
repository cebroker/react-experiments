import { combineReducers } from 'redux';
import { rootReducer as loggedInUser } from './loggedInUser';

const rootReducer = combineReducers({
  loggedInUser
});

export default rootReducer;
