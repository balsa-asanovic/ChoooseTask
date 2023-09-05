import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

describe('Tile Component', () => {
    it('renders without errors', () => {
        const { container } = render(
            <Tile
                title="Sample Title"
                subtitle="Sample Subtitle"
                image="sample-image.jpg"
                offset={100}
                rating={4}
            />
        );

        // Assert that the component is rendered without errors
        expect(container).toBeInTheDocument();
    });

    it('displays the title and subtitle', () => {
        // Render the component
        const { getByText } = render(
            <Tile
                title="Sample Title"
                subtitle="Sample Subtitle"
                image="sample-image.jpg"
                offset={100}
                rating={4}
            />
        );

        // Assert that the title and subtitle text is displayed
        expect(getByText('Sample Title')).toBeInTheDocument();
        expect(getByText('Sample Subtitle')).toBeInTheDocument();
    });

    // Add more test cases as needed
});
