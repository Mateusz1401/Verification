/* eslint-disable */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import moment from 'moment';

import DatePicker from '.';

let container = null;

describe('datepicker tests', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it('render datepicker', () => {
    const onChange = jest.fn();
    act(() => {
      render(<DatePicker value={moment()} onChange={onChange} />, container);
    });
    expect(pretty(container.innerHTML));
  });
});
