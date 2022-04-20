// Mock props to test interface props
import { IAppSpace } from './AppSpace';

const base: IAppSpace = {
  sampleTextProp: 'Hello world!',
};

const alt: IAppSpace = {
  sampleTextProp: 'Hello alt world!',
};

export const mockAppSpaceProps = {
  base,
  alt,
};
