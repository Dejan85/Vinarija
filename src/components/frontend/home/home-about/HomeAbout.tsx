import React from "react";
import { SubContainer, Heading, Paragraph } from "src/components/ui";

const HomeAbout = (props): JSX.Element => {
  const {
    content: { heading, text },
  } = props;

  return (
    <SubContainer as="section" className="home-about">
      <Heading as="h2">{heading}</Heading>
      {text.map((text, item) => (
        <Paragraph key={item} as="p" className="home-about__text">
          {text}
        </Paragraph>
      ))}
    </SubContainer>
  );
};

export default HomeAbout;
