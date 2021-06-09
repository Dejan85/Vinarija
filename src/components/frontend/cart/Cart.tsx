import React from "react";
import { SubContainer, Element, Heading, Paragraph } from "src/components/ui";

const Cart = (): JSX.Element => {
  const test = window && localStorage.getItem("cart");

  console.log("test", JSON.parse(test));

  return (
    <SubContainer className="cart" as="div">
      <Element as="div" className="cart__heading-container">
        <Heading as="h3">Korpa</Heading>
        <Paragraph as="p">
          Please review the contents of your cart. When you have finished please
          proceed to the check out.
        </Paragraph>
      </Element>
    </SubContainer>
  );
};

export default Cart;
