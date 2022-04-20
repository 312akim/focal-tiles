import React, { ReactNode } from 'react';
import AppHeader from '../../surfaces/appHeader/AppHeader';

export interface IAppLayout {
    children: ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
    return (
        <div className='min-h-screen'>
            <AppHeader auth={true}/>
            <main>{children}</main>
            <h1 className='min-h-[6vh] bg-gray text-white'>Footer Placeholder</h1>
        </div>
    );
}

export default AppLayout;