import React from "react";
import {
  SubContainer,
  Heading,
  Paragraph,
  Product,
  Element,
} from "src/components/ui";

const Vine = (): JSX.Element => {
  return (
    <SubContainer className="vine">
      <Heading as="h2" className="vine__heading">
        Nasa <br /> Kolekcija Vina
      </Heading>

      <Paragraph as="p" className="vine__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consectetur quaerat quos ex inventore.
      </Paragraph>

      <Paragraph as="p" className="vine__text vine__text--small-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos
        illum suscipit? Doloremque inventore dolorum cupiditate sapiente aperiam
        expedita neque unde sint ad in quisquam totam soluta, voluptates, rem
        at?
      </Paragraph>

      <Element as="div" className="vine__products">
        <Product
          heading="Chardonnay"
          image="/images/home/products/wine-11.png"
        />
        <Product
          heading="Sauvignon Blanc"
          image="/images/home/products/wine-12.png"
        />
        <Product
          heading="Cabernet Sauvignon"
          image="/images/home/products/wine-13.png"
        />
        <Product heading="Merlot" image="/images/home/products/wine-14.png" />
        <Product
          heading="Pinot Noir"
          image="/images/home/products/wine-15.png"
        />
        <Product heading="Rose" image="/images/home/products/wine-16.png" />
      </Element>
    </SubContainer>
  );
};

export default Vine;
