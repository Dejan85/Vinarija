import React from "react";
import { Element, Paragraph, Link, Image } from "src/components/ui";

const ShopProductCard = (props): JSX.Element => {
  const { image = "/", buttonText, price, volume, wineDescription, name } = props;
  return (
    <Element as="article" className="shop-product-card">
      <Element as="div" className="shop-product-card__image-container">
        <Image
          className="shop-product-card__image"
          src={image}
          alt="src"
          width="250"
          height="350"
          objectFit="cover"
        />
      </Element>

      <Paragraph className="shop-product-card__text" as="p">
        {wineDescription}
      </Paragraph>
      <Element as="div" className="shop-product-card__price-container">
      <Paragraph className="shop-product-card__price" as="span">
        {price}
      </Paragraph>
      <Paragraph className="shop-product-card__volume" as="span">
        / {volume}
      </Paragraph>
      </Element>
      <Link className="shop-product-card__link" href={`/prodavnica/${name}`}>
        {buttonText}
      </Link>
    </Element>
  );
};

export default ShopProductCard;
