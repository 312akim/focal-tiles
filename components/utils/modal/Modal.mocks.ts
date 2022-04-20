// Mock props to test interface props
import { IModal } from './Modal';

const base: IModal = {
  sampleTextProp: 'Hello world!',
};

const alt: IModal = {
  sampleTextProp: 'Hello alt world!',
};

export const mockModalProps = {
  base,
  alt,
};
