import React from "react";
import { Image, Paragraph, Element } from "src/components/ui";
import { HomeProductProps } from "../types";

const Product = (props: HomeProductProps): JSX.Element => {
  const { image, heading } = props;
  return (
    <Element as="div" className="product">
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
    </Element>
  );
};

export default Product;
