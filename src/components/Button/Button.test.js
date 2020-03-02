/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Button from '.';

let container = null;

describe('button tests', () => {
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
      render(<Button title="Create" />, container);
    });
    expect(pretty(container.innerHTML));
  });
})

