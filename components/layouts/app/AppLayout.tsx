import React, { ReactNode } from 'react';
import AppHeader from '../../surfaces/appHeader/AppHeader';

export interface IAppLayout {
    children: ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
    return (
        <>
            <AppHeader auth={true}/>
            <main>{children}</main>
            <h1>Footer Placeholder</h1>
        </>
    );
}

export default AppLayout;