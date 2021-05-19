import React from "react";
import Image from "next/image";

const Product = (): JSX.Element => {
  return (
    <div className="product">
      <Image
        src="/images/home/products/vino.png"
        alt="img"
        width=""
        height="500px"
        objectFit="contain"
      />
      <h3 className="product__heading">PINOT NOIR</h3>
    </div>
  );
};

export default Product;
