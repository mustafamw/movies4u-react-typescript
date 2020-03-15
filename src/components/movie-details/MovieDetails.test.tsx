import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { MovieDbInterface }  from '../../interfaces/movieDb/MovieDbInterface';

test('renders learn react link', () => {
  const MovieDbInterface: MovieDbInterface = {} as MovieDbInterface;
  const { getByText } = render(<MovieDetails {...MovieDbInterface} />);
  expect(getByText).toBeTruthy();
});
