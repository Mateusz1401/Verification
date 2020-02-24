
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { find } from 'lodash';

import * as types from './constants';
import * as actions from './actions';
import { api } from '../../api';

function* createEvent({ payload }) {
  try {
    const response = yield axios.post(api.createEvent, {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      eventDate: payload.eventDate.utc().format()
    });

    yield put(actions.createEventDone(response));
  } catch (err) {
    const { response } = err;

    const messages = response.data.message;

    var result = messages.reduce((map, obj) => {
      map[obj.property] = find(Object.keys(obj.constraints), x => x === 'isNotEmpty') ? obj.constraints['isNotEmpty'] : Object.values(obj.constraints)[0];
      return map;
    }, {});

    yield put(actions.createEventFailed(result));
  }
}

export const getEventSaga = takeEvery(types.CREATE_EVENT_REQUEST, createEvent);