import { combineReducers } from 'redux';
import ProvidersReducer from './providers_reducer';

const rootReducer = combineReducers({
  providers: ProvidersReducer
});

export default rootReducer;
