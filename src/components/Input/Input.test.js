/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Input from '.';

let container = null;

describe('input tests', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it('render input', () => {
    const onChange = jest.fn();
    
    act(() => {
      render(<Input icon="user" value="value" onChange={onChange} />, container);
    });
    expect(pretty(container.innerHTML));
  });
});
