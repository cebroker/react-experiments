import { fork } from 'redux-saga/effects';
import { rootSaga as loggedInUser } from './loggedInUser';

export default function* rootSaga() {
  yield [fork(loggedInUser)];
}
