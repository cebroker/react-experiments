import { takeLatest } from 'redux-saga/effects';

import at from '../actions/types';
import fetch from './fetch';

export default function* root() {
  yield takeLatest(at.FETCH_REQUEST, fetch);
}
