/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Loading from '.';

let container = null;

describe('loadingPage tests', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it('render LoadingPage', () => {
    act(() => {
      render(<Loading />, container);
    });
    expect(pretty(container.innerHTML));
  });
});
