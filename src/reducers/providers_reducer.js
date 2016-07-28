import { FETCH_PROVIDER } from '../actions/index';

const INITIAL_STATE = { provider: null };

export default function(state = INITIAL_STATE, action ) {
  switch (action.type) {
    case FETCH_PROVIDER:
      return { provider: action.payload.data }
    default:
      return state;
  }
}
