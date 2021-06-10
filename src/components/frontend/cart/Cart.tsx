import { useContext } from "react";
import { SubContainer, Element, Heading, Paragraph } from "src/components/ui";
import { ShoppingCartContext } from "src/contexts/shoppingCart/ShoppingCartContext";
import CartTable from "./partials/CartTable";

const Cart = (): JSX.Element => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <SubContainer className="cart" as="div">
      <Element as="div" className="cart__heading-container">
        <Heading as="h3">Korpa</Heading>
        <Paragraph as="p">
          Please review the contents of your cart. When you have finished please
          proceed to the check out.
        </Paragraph>
      </Element>
      {cart.length && <CartTable cart={cart} />}
    </SubContainer>
  );
};

export default Cart;
