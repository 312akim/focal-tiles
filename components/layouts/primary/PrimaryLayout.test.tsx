import { render, screen } from '@testing-library/react';
import PrimaryLayout from './PrimaryLayout';

describe('PrimaryLayout', () => {
  it('renders text', () => {
    render(
      <PrimaryLayout>
        <div>Google</div>
      </PrimaryLayout>
    );

    const text = screen.getByText(/Google/i);

    expect(text).toBeInTheDocument();
  });
});
