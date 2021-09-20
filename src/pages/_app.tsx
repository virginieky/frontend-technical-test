import type { AppProps } from 'next/app';
import UsersProvider from "../containers/UsersProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '@progress/kendo-theme-default/dist/all.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UsersProvider>
      <Component {...pageProps} />
    </UsersProvider>
  );
};

export default MyApp;
