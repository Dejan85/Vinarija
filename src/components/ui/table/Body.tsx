import React from "react";
import { Element, Heading, Paragraph, Input } from "src/components/ui";
import Image from "next/image";

const Body = (props): JSX.Element => {
  const { cart, onChange } = props;
  const filteredCart = cart.filter((item) => !item.hour);

  return (
    <>
      {filteredCart.map(({ id, image, name, price, sum, volume }) => {
        return (
          <Element as="div" className="table__body" key={id}>
            <Element as="div" className="table__body-sum">
              <Element as="div" className="table__body-sum--container">
                <input
                  className="table__body-sum--input"
                  onChange={onChange}
                  name={name}
                  type="number"
                  value={sum}
                />
                <button className="table__body-sum--button">UPDATE</button>
              </Element>
            </Element>

            <Element as="div" className="table__body-article">
              <Element
                as="div"
                className="table__body-article--image-container"
              >
                <Image
                  className="table__body-article--image"
                  src={image}
                  width="50"
                  height="80"
                />
              </Element>
              <Element as="div" className="table__body-article--content">
                <Paragraph as="p">{name}</Paragraph>
                <Paragraph as="p">{volume}</Paragraph>
                <button className="table__body-sum--button">REMOVE</button>
              </Element>
            </Element>

            <Element as="div" className="table__body-availability">
              <Element as="div" className="table__body-availability--container">
                <Paragraph as="p">Na lageru</Paragraph>
              </Element>
            </Element>

            <Element as="div" className="table__body-price">
              <Paragraph as="p">{price} RSD</Paragraph>
            </Element>
          </Element>
        );
      })}
    </>
  );
};

export default Body;
