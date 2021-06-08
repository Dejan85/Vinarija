import React from "react";
import {
  SubContainer,
  Element,
  Heading,
  Input,
  Paragraph,
  Textarea,
} from "src/components/ui";
import RadioInputRender from "./partials/RadioInputRender";
import ContactImage from "./partials/ContactImage";

const Contact = (): JSX.Element => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <SubContainer as="section" className="contact">
      <Element as="article" className="contact__left-article">
        <Heading className="contact__heading" as="h3">
          Kontaktirajte nas
        </Heading>
        <form onSubmit={onSubmit}>
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
            <Element as="div" className="contact__textarea">
              <Textarea rows={10} label="poruka" placeholder="vasa poruka..." />
            </Element>

            <button className="contact__submit-button" type="submit">
              Posalji
            </button>
          </Element>
        </form>
      </Element>
      <Element as="article" className="contact__images-container">
        <Element as="div" className="contact__empty-div" />
        <ContactImage src="/images/contact/wine-1.jpg" />
        <ContactImage src="/images/contact/wine-2.jpg" />
        <ContactImage src="/images/contact/wine-4.jpg" />
      </Element>

      <Element as="article" className="contact__footer">
        <Paragraph as="p">@rtanjvinarija</Paragraph>
      </Element>
    </SubContainer>
  );
};

export default Contact;
