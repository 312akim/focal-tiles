// Mock props to test interface props
import { IDropDownMenu } from './DropDownMenu';

const mockDisplayData = [
    { displayName: 'Dropdown Test 1'},
    { displayName: 'Dropdown Test 2'},
    { displayName: 'Dropdown Test 3'},
]

const base: IDropDownMenu = {
  hidden: false,
  empty: false,
  displayData: mockDisplayData,
  width: 'w-48'
};

const alt: IDropDownMenu = {
  hidden: false,
  empty: true,
  displayData: mockDisplayData,
  width: 'w-24'
};

export const mockDropDownMenuProps = {
  base,
  alt,
};
