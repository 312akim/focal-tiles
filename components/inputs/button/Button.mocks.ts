// Mock props to test interface props
import { IButton } from './Button';

const base: IButton = {
  text: 'Go to App',
};

const alt: IButton = {
  text: 'Submit',
};

export const mockButtonProps = {
  base,
  alt,
};
