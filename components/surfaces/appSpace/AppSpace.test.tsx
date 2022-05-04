import { render, screen } from '@testing-library/react';
import AppSpace from './AppSpace';

describe('AppSpace', () => {
  it('renders a task space child node with text from a task tile', () => {
    render(<AppSpace />);

    const text = screen.getAllByText(/Complete/i)[0];

    expect(text).toBeInTheDocument();
  });
});
