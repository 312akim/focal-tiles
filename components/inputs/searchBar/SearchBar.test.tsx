import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let container: HTMLElement;
  let searchValue: HTMLElement;
  
  beforeEach(() => {
    container = render(<SearchBar searchData={[{displayName: "", onClick: () => false}]}/>).container;
    searchValue = getByTestId(container, "headerSearchInput")
  })
  
  it('renders with an empty string value', () => {

    expect(searchValue).toHaveDisplayValue("");
  });

  it('it takes and displays the users input', () => {
    userEvent.type(screen.getByRole('textbox'), "Figma")

    expect(searchValue).toHaveValue("Figma");
  })
});
