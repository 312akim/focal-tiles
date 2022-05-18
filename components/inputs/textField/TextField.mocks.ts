// Mock props to test interface props
import { ITextField } from './TextField';

const base: ITextField = {
  label: 'Test Label',
  id: 'test1',
  value: '',
  setValue: () => console.log('')
};

const alt: ITextField = {
  label: 'Test Label',
  id: 'test2',
  value: '',
  setValue: () => console.log('')
};

export const mockTextFieldProps = {
  base,
  alt,
};
