import React from 'react';
import AppLayout from '../components/layouts/app/AppLayout';
import { ReactElement } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import AppSpace from '../components/surfaces/appSpace/AppSpace';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function FocalApp() {
    return (
      <AppSpace />
    );
}

FocalApp.getLayout = function getLayout(page: ReactElement) {
    return (
      <Provider store={store}>
        <PrimaryLayout>
          <AppLayout>
            {page}
          </AppLayout>
        </PrimaryLayout>
      </Provider>
    )
  }

export default FocalApp;