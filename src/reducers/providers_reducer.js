import { FETCH_PROVIDER } from '../actions/index';

const INITIAL_STATE = { provider: null };

export default function(state = INITIAL_STATE, action ) {
  //console.log('Provider Reducer:', state);
  console.log('Action', action);
  console.log('Type', FETCH_PROVIDER);

  switch (action.type) {
    case FETCH_PROVIDER:
      console.log('Fetch Provider:', state);
      return { provider: action.payload.data }
    default:
      return state;
  }
}
