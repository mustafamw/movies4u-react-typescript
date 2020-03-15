import React from 'react';
import { render } from '@testing-library/react';
import MoviePage from './MoviePage';

test('renders learn react link', () => {
  const { getByText } = render(<MoviePage />);
  expect(getByText).toBeTruthy();
});
