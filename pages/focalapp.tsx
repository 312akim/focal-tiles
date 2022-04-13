import React from 'react';
import AppLayout from '../components/layouts/app/AppLayout';
import { ReactElement } from 'react';

function FocalApp() {
    return (
        <div>
            <h1>FocalApp Page</h1>
        </div>
    );
}

FocalApp.getLayout = function getLayout(page: ReactElement) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default FocalApp;