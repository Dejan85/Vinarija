import { useContext } from "react";
import {
  Image,
  Element,
  Link,
  Paragraph,
  SocialLinks,
} from "src/components/ui";
import { NavContext } from "src/contexts/navigation/NavContext";

const Navigation = (): JSX.Element => {
  const { closeNav } = useContext(NavContext);

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
        <Link.ActiveLink
          href="/"
          className="navigation__col__nav-links"
          setToggleNav={closeNav}
        >
          Naslovna
        </Link.ActiveLink>

        {/* <Link.ActiveLink
          href="/vina"
          className="navigation__col__nav-links"
          setToggleNav={closeNav}
        >
          Vina
        </Link.ActiveLink> */}

        <Link.ActiveLink
          href="/vinogradi"
          className="navigation__col__nav-links"
          setToggleNav={closeNav}
        >
          Vinogradi
        </Link.ActiveLink>

        <Link.ActiveLink
          href="/prodavnica"
          className="navigation__col__nav-links"
          setToggleNav={closeNav}
        >
          Prodavnica
        </Link.ActiveLink>

        <Link.ActiveLink
          href="/kontakt"
          className="navigation__col__nav-links"
          setToggleNav={closeNav}
        >
          Kontakt
        </Link.ActiveLink>
        <Element as="div" className="navigation__col__socials">
          <p>Konektujmo se</p>
          <SocialLinks className="navigation__col__socials__icons" />
        </Element>
      </Element>
      <Element as="div" className="navigation__col"></Element>
    </Element>
  );
};

export default Navigation;
