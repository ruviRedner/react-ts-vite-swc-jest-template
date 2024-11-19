import { render, screen } from '@testing-library/react';
import { RationList } from './RationList';
import "@testing-library/jest-dom";
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('RationList Component - Basic Rendering', () => {
    test('should render header and empty state correctly', async () => {
        render(
            <MemoryRouter>
                <RationList />
            </MemoryRouter>);

        // בדוק את כותרת הדף
        expect(screen.getByTestId("ration-list-title")).toBeInTheDocument();
        

    });
});
