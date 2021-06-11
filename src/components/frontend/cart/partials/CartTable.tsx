import { FaArrowDown } from "react-icons/fa";
import { Element, Heading, Paragraph, Table } from "src/components/ui";

const CartTable = (props): JSX.Element => {
  const { cart } = props;

  // console.log("test", cart);

  const onChange = () => {};

  return (
    <Element as="div" className="cart__table">
      <Table>
        <Table.Heading />
        <Table.Body cart={cart} onChange={onChange} />
      </Table>
    </Element>
  );
};

export default CartTable;
