import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { MoviesDbService } from '../../services/moviesDb/MovieDbService';

describe('HomePage component', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText).toBeTruthy();
  });
});