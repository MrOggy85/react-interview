import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from './Movies';

test('renders 5 number of movies', () => {
  render(<Movies />);

  // Please add the right test-id instead of ???
  const linkElements = screen.getAllByTestId('???');
  expect(linkElements.length).toBe(5);
});
