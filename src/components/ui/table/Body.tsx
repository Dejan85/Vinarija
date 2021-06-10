import React from "react";
import { Element, Heading, Paragraph, Input } from "src/components/ui";

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
          </Element>
        );
      })}
    </>
  );
};

export default Body;
