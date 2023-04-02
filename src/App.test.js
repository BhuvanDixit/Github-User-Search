import { render, screen } from "@testing-library/react"
import App from './App'

test('render', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter username here');
    expect(input).toBeInTheDocument();
})
