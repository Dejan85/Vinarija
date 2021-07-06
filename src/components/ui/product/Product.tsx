import React from "react";
import { Image, Paragraph, Link } from "src/components/ui";
import { ProductProps } from "./types";

const Product = (props: ProductProps): JSX.Element => {
  const { image, heading } = props;
  const slug = heading.replace(/\s/g, "").toLocaleLowerCase();

  return (
    <Link href={`/prodavnica/${slug}`} className="product">
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
    </Link>
  );
};

export default Product;
