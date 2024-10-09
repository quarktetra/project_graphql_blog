import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  // Avoid recursive calls here
  return <Component {...pageProps} />
}

export default MyApp;
