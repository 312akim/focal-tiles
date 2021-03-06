import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with passed text', () => {
    render(<Button>Submit</Button>);
    const text = screen.getByText(/Submit/i);
    
    expect(text).toBeInTheDocument();
  });
});
