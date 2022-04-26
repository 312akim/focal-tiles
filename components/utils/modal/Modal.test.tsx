import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('renders text within a child element', () => {
    render(<Modal><div>Child</div></Modal>);

    const text = screen.getByText(/Child/i);

    expect(text).toBeInTheDocument();
  });
});
