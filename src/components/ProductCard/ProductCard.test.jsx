import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('...', () => {
    render(<ProductCard>ProductCard</ProductCard>);

    expect(screen.getByText('ProductCard')).toBeInTheDocument();
  });
});
