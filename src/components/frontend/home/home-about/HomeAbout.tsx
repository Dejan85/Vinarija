import React from "react";
import { SubContainer, Heading, Paragraph } from "src/components/ui";

const HomeAbout = (): JSX.Element => {
  return (
    <SubContainer as="section" className="home-about">
      <Heading as="h2">O nama</Heading>
      <Paragraph as="p" className="home-about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at nulla
        tempora ipsum voluptatibus magnam aut veniam, eos adipisci veritatis
        enim accusantium nostrum molestias voluptate blanditiis nobis. Qui,
        perspiciatis sit.
      </Paragraph>
      <Paragraph as="p" className="home-about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at nulla
        tempora ipsum voluptatibus magnam aut veniam, eos adipisci veritatis
        enim accusantium nostrum molestias voluptate blanditiis nobis. Qui,
        perspiciatis sit.
      </Paragraph>
    </SubContainer>
  );
};

export default HomeAbout;
