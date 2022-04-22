import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('renders text', () => {
    render(<AppHeader auth={true} />);

    const text = screen.getByText(/Space/i);

    expect(text).toBeInTheDocument();
  });
});
