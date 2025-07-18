import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Home component for "/" path', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to our Landing Page/i)).toBeInTheDocument();
});

test('renders Login component for "/login" path', () => {
    render(
        <MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('renders ForgotPassword component for "/forgot-password" path', () => {
    render(
        <MemoryRouter initialEntries={['/forgot-password']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
});

test('renders Register component for "/register" path', () => {
    render(
        <MemoryRouter initialEntries={['/register']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/Hehe we cannot register you at the moment :P/i)).toBeInTheDocument();
});

test('renders About component for "/about" path', () => {
    render(
        <MemoryRouter initialEntries={['/about']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/This is About Us Page/i)).toBeInTheDocument();
});
