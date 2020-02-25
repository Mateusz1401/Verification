/* eslint-disable */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Spinner from ".";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render spinners', () => {
  act(() => {
    render(<Spinner spin={true} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"custom-spinner\\">
      <div class=\\"ant-spin ant-spin-spinning\\"><span class=\\"ant-spin-dot ant-spin-dot-spin\\"><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i></span></div>
    </div>"
  `);

  act(() => {
    render(<Spinner spin={true} tip="Loading" />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"custom-spinner\\">
      <div class=\\"ant-spin ant-spin-spinning ant-spin-show-text\\"><span class=\\"ant-spin-dot ant-spin-dot-spin\\"><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i></span>
        <div class=\\"ant-spin-text\\">Loading</div>
      </div>
    </div>"
  `);
});
