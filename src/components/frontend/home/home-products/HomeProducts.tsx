import React from "react";
import { SubContainer, Link, Product } from "src/components/ui";

const HomeProducts = (props): JSX.Element => {
  const {
    allWines: { data },
    homeProducts: {
      data: { buttonText },
    },
  } = props;

  return (
    <>
      <SubContainer className="products" as="section">
        {data.map(({ image, name }, index) => (
          <Product key={index} heading={name} image={image} />
        ))}
      </SubContainer>
      <Link href="/" className="products__link">
        {buttonText}
      </Link>
    </>
  );
};

export default HomeProducts;
