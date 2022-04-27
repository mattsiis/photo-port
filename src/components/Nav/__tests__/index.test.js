import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

describe('About component', () => {
    // renders About test

    // First test
    it('renders', () => {
        render(<Nav />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const {asFragment} = render(<Nav />)
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visable', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // assert
        expect(getByLabelText('camera')).toHaveTextContent('camera');
    })
})

describe('links are visable', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})