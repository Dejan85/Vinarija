import React from "react";
import { SubContainer, Link, Product } from "src/components/ui";

const HomeProducts = (props): JSX.Element => {
  const {
    allWines: { images, vinesHeading },
    homeProducts: { buttonText },
  } = props;
  return (
    <>
      <SubContainer className="products" as="section">
        {images.map((image, index) => (
          <Product key={index} heading={vinesHeading[index]} image={image} />
        ))}
      </SubContainer>
      <Link href="/" className="products__link">
        {buttonText}
      </Link>
    </>
  );
};

export default HomeProducts;
