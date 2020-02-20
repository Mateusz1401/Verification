
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as types from './constants';
import * as actions from './actions';
import { api } from '../../api';

function* verifyData({ payload }) {
  try {
    const response = yield axios.post(api.verifyData, { payload });

    yield put(actions.verificationDone(response));
  } catch (err) {
    const { response } = err;
    yield put(actions.verificationFailed(response));
  }
}

export const getVerificationSaga = takeEvery(types.VERIFY_REQUEST, verifyData);