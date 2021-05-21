import React from "react";
import {
  Image,
  Element,
  Link,
  Paragraph,
  SocialLinks,
} from "src/components/ui";

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

        <Link.ActiveLink href="/vina" className="navigation__col__nav-links">
          Vina
        </Link.ActiveLink>

        <Link.ActiveLink
          href="/vinogradi"
          className="navigation__col__nav-links"
        >
          Vinogradi
        </Link.ActiveLink>

        <Link.ActiveLink
          href="/prodavnica"
          className="navigation__col__nav-links"
        >
          Prodavnica
        </Link.ActiveLink>

        <Link.ActiveLink href="/kontakt" className="navigation__col__nav-links">
          Kontakt
        </Link.ActiveLink>
        <Element as="div" className="navigation__col__socials">
          <p>Konektujmo se</p>
          <SocialLinks className="navigation__col__socials__icons" />
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
