import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as api from '../../../api/users';
import at from '../actions/types';

export default function* fetch() {
  yield call(delay, 300);
  try {
    const user = yield call(api.fetchLoggedInUser);
    yield put({ type: at.FETCH_SUCCESS, user });
  } catch (error) {
    console.log(error);
    yield put({ type: at.FETCH_FAILURE });
  }
}
