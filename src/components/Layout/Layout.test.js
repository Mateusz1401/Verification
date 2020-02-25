/* eslint-disable */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Layout from ".";

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

it("render layout", () => {
  act(() => {
    render(
      <Layout>
        <div>content</div>
      </Layout>,
      container
    );
  });
  expect(pretty(container.innerHTML));
});
