import { render, screen } from '@testing-library/react';
import App from './App';

it('should have hello world', () => {
    render(<App/>);
    const message= screen.queryByText('Hello World');
    expect(message).toBeVisible();
});

it('should have a button element', () => {
    render(<App />);
    const buttonElement = screen.queryByRole('button');

    expect(buttonElement).toBeInTheDocument();
});

it('should have adventure', () => {
    render(<App/>);
    const word= screen.queryByText('We invite you to embark on your next adventure with us.');
    expect(word).toBeInTheDocument();
});
