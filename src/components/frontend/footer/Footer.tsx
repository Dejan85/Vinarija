import React from "react";
import {
  SubContainer,
  Element,
  Paragraph,
  SocialLinks,
} from "src/components/ui";
import { FaAngleRight } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <Element as="div" className="footer">
      <Element as="div" className="footer__news">
        <h1>Budimo u kontaktu</h1>
        <form>
          <input type="text" name="email" placeholder="Email" className="footer__input" />
          <input
            type="text"
            placeholder="Poštanski broj"
            className="footer__input"
          />
          <button type="submit">Pridruži se</button>
        </form>
        <a href="#" className="footer__link">
          <FaAngleRight size={32} color={"#338033"} className="arrow" /> <span>Kontakt</span>
        </a>
      </Element>
      <Element as="div" className="footer__footer-down">
        <img src="/images/logo/logo_2.png" alt="logo" />
        <Element as="div" className="footer__copy">
          <Paragraph as="p">
            Ovu web stranicu Vam predstavlja "Vinarija Rnjak".
          </Paragraph>
          <Paragraph as="p">
            Sva prava zadržana &copy;.
          </Paragraph>
        </Element>
        <Element as="div" className="footer__socials">
          <SocialLinks />
        </Element>
      </Element>
    </Element>
  );
};

export default Footer;
