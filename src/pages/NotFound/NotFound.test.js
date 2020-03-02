/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import NotFoundPage from '.';

let container = null;

describe('notFoundPage tests', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it('render NotFoundPage', () => {
    act(() => {
      render(<NotFoundPage />, container);
    });
    expect(pretty(container.innerHTML));
  });
});
