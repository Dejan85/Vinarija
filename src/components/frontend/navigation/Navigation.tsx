import React from "react";
import { Image, Element, Link } from "src/components/ui";

const Navigation = (): JSX.Element => {
  return (
    <Element as="div" className="navigation">
      <Element as="div" className="navigation__col">
        <Image
          className="navigation__col__nav-logo"
          src="/images/logo/logo_2.png"
          alt="logo"
          width="200px"
          height=""
          objectFit="contain"
        />
        <Link.ActiveLink href="/" className="navigation__col__nav-links">
          Naslovna
        </Link.ActiveLink>

        <Link href="/vina" className="navigation__col__nav-links">
          Vina
        </Link>

        <Link href="/vinogradi" className="navigation__col__nav-links">
          Vinogradi
        </Link>

        <Link href="/prodavnica" className="navigation__col__nav-links">
          Prodavnica
        </Link>

        <Link href="/kontakt" className="navigation__col__nav-links">
          Kontakt
        </Link>
        <Element as="div" className="navigation__col__socials">
          <p>Konektujmo se</p>
          <Element as="div" className="navigation__col__socials__icons">
            <a href="#">
              <img src="/icons/socials/facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="/icons/socials/instagram.svg" alt="instagram" />
            </a>
          </Element>
        </Element>
      </Element>
      <Element as="div" className="navigation__col">
        <Image
          className="navigation__col__nav-images"
          src="/images/home/welcome-page/background.webp"
          alt="image"
          width="800"
          height="600"
          objectFit="contain"
        />
      </Element>
    </Element>
  );
};

export default Navigation;
