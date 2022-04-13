import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
