/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Error from '.';

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

it('render buttons', () => {
  act(() => {
    render(<Error errorMessage="Wrong email" />, container);
  });
  expect(container.textContent).toBe('Wrong email');

  act(() => {
    render(<Error errorMessage="Field required" />, container);
  });
  expect(container.textContent).toBe('Field required');
});