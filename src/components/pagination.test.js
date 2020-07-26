import React from 'react';
import { render, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pagination from '../components/pagination';

test('test if links exists', () => {
    render(<Pagination />);
    expect(
        getByText(document.documentElement, 'Previous'),
    ).toBeInTheDocument()
    expect(
        getByText(document.documentElement, 'Next'),
    ).toBeInTheDocument()
});

test('renders pagination matches snapshot', () => {   
    const { asFragment } = render(<Pagination />);
    expect(asFragment()).toMatchSnapshot();
});