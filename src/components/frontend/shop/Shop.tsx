import React from "react";
import {
  Heading,
  Element,
  SubContainer,
  ShopProductCard,
} from "src/components/ui";

const Shop = (props): JSX.Element => {
  const {
    shopContent: {
      shopPage: {
        data: { heading, buttonText },
      },
    },
    allWines: {
      allWines: { data },
    },
  } = props;

  return (
    <SubContainer className="shop">
      <Heading className="shop__heading" as="h2">
        {heading}
      </Heading>

      <Element as="section" className="shop__products-container">
        {data.map(({ image, price, wineDescription }, index) => (
          <ShopProductCard
            key={index}
            buttonText={buttonText}
            image={image}
            price={price}
            wineDescription={wineDescription}
          />
        ))}
      </Element>
    </SubContainer>
  );
};

export default Shop;
