import React from "react";
import { SubContainer, Heading, Paragraph, Element } from "src/components/ui";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";

const HomeAbout = (): JSX.Element => {
  return (
    <Element as="section" className="home-about">
      <Paragraph as="p" className="home-about__subheading">
        Upoznajte nas
      </Paragraph>
      <Heading as="h1" className="home-about__heading">
        Nasa prica
      </Heading>
      <Paragraph as="p" className="home-about__text one">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        temporibus mollitia sequi iusto! Dolorem expedita eligendi corrupti
        aliquid minima consectetur nostrum cum nobis debitis fugiat alias sed,
        ad similique esse, voluptatum illum iure ratione error?
      </Paragraph>
      <Paragraph as="p" className="home-about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta
        voluptatum nostrum eaque quos totam? Velit odit repudiandae animi
        facilis harum, blanditiis veritatis aliquam maiores rem ratione
        consequatur ab labore necessitatibus earum inventore accusantium
        repellat voluptatem a provident in enim.
      </Paragraph>
    </Element>
  );
};

export default HomeAbout;
