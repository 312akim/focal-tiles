import { render, screen } from '@testing-library/react';
import TileWrapper from './TileWrapper';

describe('TileWrapper', () => {
  it('renders text', () => {
    render(<TileWrapper><div>Tile Child</div></TileWrapper>);

    const text = screen.getByText(/Tile Child/i);

    expect(text).toBeInTheDocument();
  });
});
