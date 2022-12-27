import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('...', () => {
    render(<Header>Header</Header>);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
