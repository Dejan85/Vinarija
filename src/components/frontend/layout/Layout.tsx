import React, { useEffect } from "react";
import Head from "next/head";
import { Header, Footer } from "src/components/frontend";

const Layout = ({
  children,
  title = "Vinarija Rnjak | Dobrodošli",
}): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicons/apple-touch-icon.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicons/favicon.png"
        />
        <meta name="description" content="Vinarija Rnjak" />
        <meta name="author" content="Dejan Markovic, Vanja Dulikravic" />
        <meta
          name="keywords"
          content="vino, vina, vinograd, vinogradi, rose, chardonnay, sauvignon blanc, pinot noir, cabernet sauvignon, merlot"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
