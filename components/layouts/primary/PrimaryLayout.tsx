import React, { ReactNode } from 'react';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <h1>Primary Layout</h1>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
