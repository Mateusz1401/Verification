/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store';
import pretty from 'pretty';
import mockAxios from 'axios';
import moment from 'moment';
import { createEventRequest, createEventDone } from '../../sagas/event/actions';

import Home from '.';

const mockStore = configureMockStore();
let container = null;
let store;
const fakeEvent = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  email: 'jan.kowalski@gmail.com',
  eventDate: moment().utc().format()
};

describe('homePage tests renders', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore({
      event: {
        data: {},
        errorsApi: {},
        isLoading: false
      }
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('render HomePage', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>, container);
    });
    expect(pretty(container.innerHTML));
  });
});

describe('requests test', () => {
  it('request create', async () => {

    store.dispatch(createEventRequest(fakeEvent));

    const actions = store.getActions();
    const expectedPayload = { type: 'CREATE_EVENT_REQUEST', payload: fakeEvent };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('axios tests', () => {
  it('post to api', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: fakeEvent
      })
    );

    await store.dispatch(createEventRequest(fakeEvent));
    const actions = store.getActions();

    expect.assertions(2);
    expect(actions[0].type).toEqual('CREATE_EVENT_REQUEST');
    expect(actions[0].payload).toEqual(fakeEvent);
  });
});