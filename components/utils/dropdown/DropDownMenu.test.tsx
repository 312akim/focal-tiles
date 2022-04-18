import { render, screen } from '@testing-library/react';
import DropDownMenu from './DropDownMenu';
import { mockDropDownMenuProps } from './DropDownMenu.mocks';

describe('DropDownMenu', () => {
  it('renders the dropdown display data', () => {
    render(<DropDownMenu hidden={false} displayData={mockDropDownMenuProps.base.displayData} width='w-32'/>);

    const text = screen.getByText(/Dropdown Test 1/i);

    expect(text).toBeInTheDocument();
  });
});
