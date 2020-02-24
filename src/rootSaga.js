import { all } from 'redux-saga/effects';

import { getEventSaga } from './sagas/event/saga';

export function* rootSaga() {
  yield all([
    getEventSaga
  ]);
}