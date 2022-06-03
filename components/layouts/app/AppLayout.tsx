import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from '../../../app/authSlice';
import AppHeader from '../../surfaces/appHeader/AppHeader';

export interface IAppLayout {
  children: ReactNode;
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  const auth = useSelector(selectAuthStatus);
  
  return (
    <div className="min-h-screen">
      <AppHeader auth={auth ?? false} />
      <main>{children}</main>
      <h1 className="min-h-[6vh] bg-primary-400 text-white">
        Footer Placeholder
      </h1>
    </div>
  );
};

export default AppLayout;
