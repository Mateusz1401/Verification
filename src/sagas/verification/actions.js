
import * as types from './constants';

export const verifyRequest = () => (
  { type: types.VERIFY_REQUEST }
);

export const verificationDone = payload => (
  { type: types.VERIFICATION_DONE, payload }
);

export const verificationFailed = error => (
  { type: types.VERIFICATION_FAILED, error }
);