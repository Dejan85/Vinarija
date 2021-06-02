import React from "react";
import {
  SubContainer,
  Heading,
  Paragraph,
  Product,
  Element,
  Link,
  Input,
} from "src/components/ui";
import Image from "next/image";
import { ShopDetailProps } from "./types";

const ShopDetail = (props: ShopDetailProps): JSX.Element => {
  const {
    wine: {
      wineDescription,
      price,
      detailDescription,
      specification: { berba, sorta, alkohol },
      wineProfile,
      image,
    },
  } = props;

  return (
    <SubContainer as="div" className="shop-detail">
      <Element as="article" className="shop-detail__image-container">
        <Image
          src={image}
          alt="img"
          width="350"
          height="450"
          objectFit="cover"
        />
      </Element>
      <Element as="article" className="shop-detail__content">
        <Heading as="h3" className="shop-detail__content-heading">
          {wineDescription}
        </Heading>
        <Paragraph as="p" className="shop-detail__content-price">
          {price}
        </Paragraph>
        <Element as="div" className="shop-detail__button-container">
          <input
            className="shop-detail__content-wine-sum"
            value="1"
            onChange={() => {}}
          />
          <button className="shop-detail__content-button">Dodaj u korpu</button>
        </Element>
        <Paragraph as="p" className="shop-detail__content-description">
          {detailDescription[0]}
        </Paragraph>
        <Heading as="h4" className="shop-detail__content-specification-heading">
          SPECIFIKACIJE
        </Heading>
        <Element
          as="div"
          className="shop-detail__content-specification-text-container"
        >
          <Paragraph as="p" className="shop-detail__content-specification-text">
            Berba:
          </Paragraph>
          <Paragraph
            as="span"
            className="shop-detail__content-specification-text-span"
          >
            {berba}
          </Paragraph>
        </Element>

        <Element
          as="div"
          className="shop-detail__content-specification-text-container"
        >
          <Paragraph as="p" className="shop-detail__content-specification-text">
            Sorta:
          </Paragraph>
          <Paragraph
            as="span"
            className="shop-detail__content-specification-text-span"
          >
            {sorta}
          </Paragraph>
        </Element>

        <Element
          as="div"
          className="shop-detail__content-specification-text-container"
        >
          <Paragraph as="p" className="shop-detail__content-specification-text">
            Alkohol %:
          </Paragraph>
          <Paragraph
            as="span"
            className="shop-detail__content-specification-text-span"
          >
            {alkohol}
          </Paragraph>
        </Element>
        <Heading as="h4" className="shop-detail__content-specification-heading">
          profili vina
        </Heading>
        <Paragraph as="p" className="shop-detail__content-wine-profile-text">
          {wineProfile[1]}
        </Paragraph>
        <Paragraph as="span" className="shop-detail__content-wine-profile-span">
          {wineProfile[2]}
        </Paragraph>
      </Element>
    </SubContainer>
  );
};

export default ShopDetail;
