import { render, screen } from '@testing-library/react';
import SpacePicker from './SpacePicker';
import { mockSpacePickerProps } from './SpacePicker.mocks';

describe('SpacePicker', () => {
  it('renders the Space Picker header', () => {
    render(<SpacePicker spaces={[...mockSpacePickerProps.base.spaces]} />);

    const text = screen.getByText(/Space Picker/i);

    expect(text).toBeInTheDocument();
  });

  it('renders the space picker dropdown data', () => {
    render(<SpacePicker spaces={[...mockSpacePickerProps.base.spaces]} />);

    const text = screen.getByText(/SpacePicker Test 1/i);

    expect(text).toBeInTheDocument();
  });
});
