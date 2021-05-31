import React from "react";
import {
  SubContainer,
  Element,
  Heading,
  Input,
  Paragraph,
} from "src/components/ui";
import RadioInputRender from "./partials/RadioInputRender";

const Contact = (): JSX.Element => {
  return (
    <SubContainer as="section" className="contact">
      <Element as="article" className="contact__left-article">
        <Heading className="contact__heading" as="h2">
          Kontaktirajte nas
        </Heading>
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

          <Paragraph className="contact__radio-text" as="p">
            Vi ste?
          </Paragraph>
          <Element as="div" className="contact__radio-container">
            <RadioInputRender
              label="trgovac na malo"
              name="email"
              type="radio"
              value="kupac"
            />

            <RadioInputRender
              label="trgovac na veliko"
              name="email"
              type="radio"
              value="kupac"
            />

            <RadioInputRender
              label="kupac"
              name="email"
              type="radio"
              value="kupac"
            />
          </Element>
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
