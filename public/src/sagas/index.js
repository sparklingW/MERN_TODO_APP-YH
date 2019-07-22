import { all } from 'redux-saga/effects';
import { usersWatcher } from './users';
import { eventsWatcher } from './events';

export function* rootSaga() {
  yield all([
    usersWatcher(),
    eventsWatcher()
  ]);
}