import React from "react";
import {
  SubContainer,
  Heading,
  Paragraph,
  Product,
  Element,
} from "src/components/ui";

const Wines = (props): JSX.Element => {
  const {
    winesPage: {
      data: { heading, text },
    },
    allWines: { data },
  } = props;

  return (
    <SubContainer className="wines">
      <Heading as="h2" className="wines__heading">
        {heading}
      </Heading>

      {text.map((text: string, index: number) => {
        return (
          <Paragraph key={index} as="p" className="wines__text">
            {text}
          </Paragraph>
        );
      })}

      <Element as="div" className="wines__products">
        {data.map(({ name, image }, index: number) => (
          <Product key={index} heading={name} image={image} />
        ))}
      </Element>
    </SubContainer>
  );
};

export default Wines;
