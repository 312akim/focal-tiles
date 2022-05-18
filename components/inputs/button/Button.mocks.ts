// Mock props to test interface props
import { IButton } from './Button';

const base: IButton = {
  onClick: () => console.log('clicked'),
};

const alt: IButton = {
  onClick: () => console.log('clicked')
};

export const mockButtonProps = {
  base,
  alt,
};
