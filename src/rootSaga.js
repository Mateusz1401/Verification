import { all } from 'redux-saga/effects';

import { getVerificationSaga } from './sagas/verification/saga';

export function* rootSaga() {
  yield all([
    getVerificationSaga
  ]);
}