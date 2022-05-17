// Mock props to test interface props
import { ITextField } from './TextField';

const base: ITextField = {
  label: 'Test Label',
  id: 'test1',
};

const alt: ITextField = {
  label: 'Test Label',
  id: 'test2',
  value: '',
};

export const mockTextFieldProps = {
  base,
  alt,
};
