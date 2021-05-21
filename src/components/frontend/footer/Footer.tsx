import React from "react";
import {
  SubContainer,
  Element,
  Paragraph,
  SocialLinks,
} from "src/components/ui";

const Footer = (): JSX.Element => {
  return (
    <Element as="div" className="footer">
      <SubContainer className="footer__container">
        <Element as="div" className="footer__links-container">
          <Paragraph as="p" className="footer__text footer__text--company-name">
            Rtanj Vinarija
          </Paragraph>
          <Paragraph as="p" className="footer__text">
            Gde Kupiti
          </Paragraph>
          <Paragraph as="p" className="footer__text">
            Pravila o privatnosti
          </Paragraph>
          <Paragraph as="p" className="footer__text">
            Kontakt
          </Paragraph>
        </Element>

        <Element as="div" className="footer__social-links">
          <SocialLinks />
        </Element>

        <Element as="div" className="footer__rights">
          <Paragraph as="p">
            © {`${new Date().getFullYear()}`} All rights reserved
          </Paragraph>
        </Element>
      </SubContainer>
    </Element>
  );
};

export default Footer;
