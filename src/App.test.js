// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KnowLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KnowLink/i);
    expect(titleElement).toBeInTheDocument();
});
