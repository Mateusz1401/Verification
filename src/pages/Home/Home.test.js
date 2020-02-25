/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store';
import pretty from 'pretty';

import Home from '.';

const mockStore = configureMockStore();
let container = null;
let store;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  store = mockStore({
    event: {
      data: [],
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