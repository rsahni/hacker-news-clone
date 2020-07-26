import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../header';

test('renders header', () => {
    render(<Header />);
    expect(
        queryByTestId(document.documentElement, 'header'),
    ).toBeInTheDocument()
});

test('renders header matches snapshot', () => {   
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
});