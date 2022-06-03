import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
};

export default PrimaryLayout;
