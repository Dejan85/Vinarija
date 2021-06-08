import { useState, useContext } from "react";
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
import { FaPlus, FaMinus, FaArrowDown } from "react-icons/fa";
import { ShoppingCartContext } from "src/contexts/shoppingCart/ShoppingCartContext";

const ShopDetail = (props: ShopDetailProps): JSX.Element => {
  const { addProductToCart } = useContext(ShoppingCartContext);
  const {
    wine: {
      wineDescription,
      price,
      volume,
      detailDescription,
      specification: { berba, sorta, alkohol },
      wineProfile,
      image,
      id,
    },
  } = props;
  const [sum, setSum] = useState(1);

  const newCart = {
    id,
    sum,
    image,
    name: wineDescription,
    volume,
    price,
  };

  const increaseHandler = (): void => setSum((sum) => sum + 1);
  const decreaseHandler = (): void => sum > 1 && setSum((sum) => sum - 1);
  const onChangeHandler = (e: { target: { value: string } }) => {
    const value: number = e.target.value && parseInt(e.target.value);
    if (value === 0) {
      return setSum(value + 1);
    }
    setSum(value);
  };
  const addToCartHandler = (): void => {
    addProductToCart(newCart);
  };

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
        <Element as="div" className="shop-detail__content-price-container">
          <Paragraph as="p" className="shop-detail__content-price">
            {price} RSD
          </Paragraph>
          <Paragraph as="p" className="shop-detail__content-price">
            / {volume}
          </Paragraph>
        </Element>
        <Element as="div" className="shop-detail__button-container">
          <button
            className="shop-detail__input-button"
            onClick={decreaseHandler}
          >
            <FaMinus />
          </button>
          <input
            className="shop-detail__content-wine-sum"
            value={sum}
            type="number"
            min="1"
            onChange={onChangeHandler}
          />
          <button
            className="shop-detail__input-button"
            onClick={increaseHandler}
          >
            <FaPlus />
          </button>
          <button
            className="shop-detail__content-button"
            onClick={addToCartHandler}
          >
            Dodaj u korpu
          </button>
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
