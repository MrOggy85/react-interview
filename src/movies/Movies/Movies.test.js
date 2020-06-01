import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from './Movies';

test('renders x number of movies', () => {
  render(<Movies />);
  const linkElements = screen.getAllByTestId('???');
  expect(linkElements.length).toBe(NaN);
});
