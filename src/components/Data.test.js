import React from 'react';
import { render , unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Data from './Data';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without hospital data", () => {
  act( () => {
    render(<Data />, container);
  });
  expect(container.textContent).toContain("loading...")
});