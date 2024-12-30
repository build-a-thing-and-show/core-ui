import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


test('renders Login component for "/" path', () => {
    render(
        <MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
});