import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('renders text', () => {
    render(<AppHeader sampleTextProp={'Google'} />);

    const text = screen.getByText(/Google/i);

    expect(text).toBeInTheDocument();
  });
});
