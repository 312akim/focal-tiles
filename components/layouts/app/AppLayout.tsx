import React, { ReactNode } from 'react';

export interface IAppLayout {
    children: ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
    return (
        <>
            <h1>Header Placeholder</h1>
            <main>{children}</main>
            <h1>Footer Placeholder</h1>
        </>
    );
}

export default AppLayout;