import React from "react";
import { Element, Link } from "src/components/ui";
import { SocialLinksProps } from "./types";

const SocialLinks = (props: SocialLinksProps): JSX.Element => {
  const { className: customClassName = "navigation__col__socials__icons" } =
    props;
  return (
    <Element as="div" className={customClassName}>
      <Link href="#">
        <img src="/icons/socials/facebook.svg" alt="facebook" />
      </Link>
      <Link href="#">
        <img src="/icons/socials/instagram.svg" alt="instagram" />
      </Link>
    </Element>
  );
};

export default SocialLinks;
