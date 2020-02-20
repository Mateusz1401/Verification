
import * as types from './constants';

export const verifyRequest = data => (
  { type: types.VERIFY_REQUEST, payload: data }
);

export const verificationDone = data => (
  { type: types.VERIFICATION_DONE, payload: data }
);

export const verificationFailed = errors => (
  { type: types.VERIFICATION_FAILED, payload: errors }
);