import React, { useEffect } from "react";
import Head from "next/head";

const Layout = ({ children, title = "Rnjak Vinarija" }): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </main>
  );
};

export default Layout;
