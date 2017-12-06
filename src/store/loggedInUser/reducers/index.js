import { combineReducers } from 'redux';

import at from '../actions/types';

const defaultState = {
  firstName: '',
  lastName: ''
};

export const user = (state = defaultState, action) => {
  switch (action.type) {
    case at.FETCH_REQUEST:
    case at.FETCH_FAILURE: {
      return defaultState;
    }
    case at.FETCH_SUCCESS: {
      return action.user;
    }
    default:
      return state;
  }
};

export const fetchStatus = (state = 'notLoaded', action) => {
  switch (action.type) {
    case at.FETCH_REQUEST: {
      return 'loading';
    }
    case at.FETCH_SUCCESS: {
      return 'loaded';
    }
    case at.FETCH_FAILURE: {
      return 'failed';
    }
    default:
      return state;
  }
};

export default combineReducers({ user, fetchStatus });
