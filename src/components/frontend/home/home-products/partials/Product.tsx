import React from "react";
import Image from "next/image";

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
      <h3 className="product__heading">{heading}</h3>
    </div>
  );
};

export default Product;
