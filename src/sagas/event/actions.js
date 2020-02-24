
import * as types from './constants';

export const createEventRequest = data => (
  { type: types.CREATE_EVENT_REQUEST, payload: data }
);

export const createEventDone = data => (
  { type: types.CREATE_EVENT_DONE, payload: data }
);

export const createEventFailed = errors => (
  { type: types.CREATE_EVENT_FAILED, payload: errors }
);