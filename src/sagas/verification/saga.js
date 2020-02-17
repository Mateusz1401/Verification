
import { put, takeEvery } from 'redux-saga/effects';

import * as types from './constants';
import * as actions from './actions';

function* verifyData() {
  try {
    // const data = yield call(fetch, api.verifyData);

    // yield put(actions.verificationDone(data));
  } catch (err) {
    const { response } = err;
    yield put(actions.verificationFailed(response.data));
  }
}

export const getVerificationSaga = takeEvery(types.VERIFY_REQUEST, verifyData);