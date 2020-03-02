/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store';
import pretty from 'pretty';

import App from './App';

const mockStore = configureMockStore();
let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render AppComponent', () => {
  const store = mockStore({
    event: {
      data: {},
      errorsApi: {},
      isLoading: false
    }
  });
  act(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>, container);
  });
  expect(pretty(container.innerHTML));
});
