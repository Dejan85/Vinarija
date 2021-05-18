import React, { useEffect } from "react";
import Head from "next/head";
import { Header, Footer } from "src/components/frontend";
// import Favicon from '../../../../public/icons/favicon.svg'

const Layout = ({ children, title = "Vinarija Rnjak | Dobrodošli" }): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../../public/icons/favicons/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="../../../public/icons/favicons/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
