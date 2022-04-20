import React from 'react';
import AppLayout from '../components/layouts/app/AppLayout';
import { ReactElement } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import AppSpace from '../components/surfaces/appSpace/AppSpace';

function FocalApp() {
    return (
      <AppSpace />
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