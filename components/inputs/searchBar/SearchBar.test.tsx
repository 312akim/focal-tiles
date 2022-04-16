import { getByTestId, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders with an empty string value', () => {
    const { container } = render(<SearchBar searchData={[{displayName: "", onClick: () => false}]}/>);
    const searchValue = getByTestId(container, "headerSearchInput")

    expect(searchValue).toHaveDisplayValue("");
  });
});
