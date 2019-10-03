import React from 'react';
import { render } from '@testing-library/react'
import App, { addStrike, addBall, addFoul } from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('addStrike adds one strike to the current strike count, and sets strike to 0 at 3rd strike', () => {
  expect(addStrike(2)).toBe(0);
  expect(addStrike(1)).toBe(2);
  expect(addStrike(2)).not.toBe(1);
})

test('at bat section is found', () => {
  const { getByText } = render(<App/>);

  getByText(/at bat/i)
})