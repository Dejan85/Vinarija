import React from "react";
import { SubContainer, Element, Heading } from "src/components/ui";

const Contact = (): JSX.Element => {
  return (
    <SubContainer as="section" className="contact">
      <Element as="article" className="contact__form-container">
        <Heading as="h2">Kontaktirajte nas</Heading>
        <Element as="div" className=""></Element>
      </Element>
      <Element as="article" className="contact__images-container">
        {/* <Heading as="h2">Kontaktirajte nas</Heading> */}
        images
      </Element>
    </SubContainer>
  );
};

export default Contact;
