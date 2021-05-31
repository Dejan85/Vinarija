import React from "react";
import { SubContainer, Element, Heading, Input } from "src/components/ui";

const Contact = (): JSX.Element => {
  return (
    <SubContainer as="section" className="contact">
      <Element as="article" className="contact__left-article">
        <Heading as="h2">Kontaktirajte nas</Heading>
        <Element as="div" className="contact__form">
          <Input
            placeholder="Ime i Prezime"
            label="ime"
            name="name"
            type="text"
          />
          <Input
            placeholder="ime@email.com"
            label="email"
            name="email"
            type="email"
          />
        </Element>
      </Element>
      <Element as="article" className="contact__images-container">
        {/* <Heading as="h2">Kontaktirajte nas</Heading> */}
        images
      </Element>
    </SubContainer>
  );
};

export default Contact;
