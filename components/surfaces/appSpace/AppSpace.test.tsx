import { render, screen } from '@testing-library/react';
import AppSpace from './AppSpace';

describe('AppSpace', () => {
  it('renders text', () => {
    render(<AppSpace />);

    const text = screen.getByText(/spaces section/i);

    expect(text).toBeInTheDocument();
  });
});
