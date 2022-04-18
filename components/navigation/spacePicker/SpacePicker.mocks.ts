// Mock props to test interface props
import { ISpacePicker } from './SpacePicker';

const base: ISpacePicker = {
  spaces: [
    {
      displayName: 'SpacePicker Test 1',
      onClick: () => { console.log('clicked 1')}
    },
    {
      displayName: 'SpacePicker Test 2',
      onClick: () => { console.log('clicked 2')}
    },
    {
      displayName: 'SpacePicker Test 3',
      onClick: () => { console.log('clicked 3')}
    },
  ]
};

const alt: ISpacePicker = {
  spaces: [
    {
      displayName: 'SpacePicker Test 4',
      onClick: () => { console.log('clicked 4')}
    },
    {
      displayName: 'SpacePicker Test 5',
      onClick: () => { console.log('clicked 5')}
    },
    {
      displayName: 'SpacePicker Test 6',
      onClick: () => { console.log('clicked 6')}
    },
    {
      displayName: 'SpacePicker Test 7',
      onClick: () => { console.log('clicked 6')}
    },
  ]
};

export const mockSpacePickerProps = {
  base,
  alt,
};
