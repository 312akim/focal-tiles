// Mock props to test interface props
import { IAppHeader } from './AppHeader';

const loggedIn: IAppHeader = {
  auth: true,
};

const loggedOut: IAppHeader = {
  auth: false,
};

export const mockAppHeaderProps = {
  loggedIn,
  loggedOut,
};
