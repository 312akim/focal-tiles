import React from 'react';
import AppLayout from '../components/layouts/app/AppLayout';
import { ReactElement } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

function FocalApp() {
    return (
        <div>
            <h1>FocalApp Page</h1>
        </div>
    );
}

FocalApp.getLayout = function getLayout(page: ReactElement) {
    return (
      <PrimaryLayout>
        <AppLayout>
          {page}
        </AppLayout>
      </PrimaryLayout>
    )
  }

export default FocalApp;