import { useContext } from "react";
import { SubContainer, Element, Heading, Paragraph } from "src/components/ui";
import { ShoppingCartContext } from "src/contexts/shoppingCart/ShoppingCartContext";
import CartTable from "./partials/CartTable";

const Cart = (): JSX.Element => {
  const { cart, bill } = useContext(ShoppingCartContext);

  return (
    <SubContainer className="cart" as="div">
      <Element as="div" className="cart__heading-container">
        <Heading as="h1">Korpa</Heading>
        <Paragraph as="p">
          Please review the contents of your cart. When you have finished please
          proceed to the check out.
        </Paragraph>
      </Element>
      {cart.length && <CartTable cart={cart} />}
      <Element as="div" className="cart__footer">
        {/* <Element as="div" className="cart__coupon">
          <Paragraph as="p" className="cart__coupon-heading">
            Imate Kupon?
          </Paragraph>
          <Element as="div" className="cart__coupon-input-container">
            <input className="cart__coupon-input" />
            <button className="cart__coupon-button">PRIMENI</button>
          </Element>
        </Element> */}

        <Element as="div" className="cart__sum-price">
          <Element as="div" className="cart__sum-price-container">
            <Paragraph as="p" className="cart__sum-price-text">
              Cena bez postarine
            </Paragraph>
            <Paragraph as="p" className="cart__sum-price-price">
              {bill} RSD
            </Paragraph>
          </Element>

          <Element as="div" className="cart__sum-price-container">
            <Paragraph as="p" className="cart__sum-price-text">
              Postarina
            </Paragraph>
            <Paragraph as="p" className="cart__sum-price-price">
              300 RSD
            </Paragraph>
          </Element>

          <Element as="div" className="cart__sum-price-container">
            <Paragraph
              as="p"
              className="cart__sum-price-text cart__sum-price-text-price-total"
            >
              Total
            </Paragraph>
            <Paragraph as="p" className="cart__sum-price-price">
              {bill + 300} RSD
            </Paragraph>
          </Element>

          <Element as="div" className="cart__sum-button-container">
            <Paragraph as="p" className="cart__sum-price-text">
              Nastavi Kupovinu
            </Paragraph>
            <button className="cart__sum-price-button">Zavrsi Kupovinu</button>
          </Element>
        </Element>
      </Element>
    </SubContainer>
  );
};

export default Cart;
