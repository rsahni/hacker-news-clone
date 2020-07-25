import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../components/header';

test('renders header', () => {
    render(<Header />);
    expect(
        queryByTestId(document.documentElement, 'header'),
    ).toBeInTheDocument()
});
