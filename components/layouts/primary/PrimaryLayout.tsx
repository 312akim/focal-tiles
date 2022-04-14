import React, { ReactNode } from 'react';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (<div>{children}</div>);
};

export default PrimaryLayout;
