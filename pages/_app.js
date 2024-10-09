import React from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // Avoid recursive calls here
  return <Component {...pageProps} />
};

export default MyApp;
