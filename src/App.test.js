import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Home component for "/" path', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to our Landing Page/i)).toBeInTheDocument();
});