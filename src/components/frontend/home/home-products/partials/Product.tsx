import React from "react";
import { Image, Paragraph } from "src/components/ui";

const Product = (props): JSX.Element => {
  const { image, heading } = props;
  return (
    <div className="product">
      {image && (
        <Image
          className="product__image"
          src={image}
          alt="img"
          width=""
          height="650px"
          objectFit="cover"
        />
      )}
      <Paragraph as="p" className="product__heading">
        {heading}
      </Paragraph>
    </div>
  );
};

export default Product;
