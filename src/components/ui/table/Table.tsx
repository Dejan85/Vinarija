import React from "react";
import { Element, Paragraph } from "src/components/ui";
import Body from "./Body";
import Heading from "./Heading";

const Table = (props) => {
  const { children } = props;
  return (
    <Element as="ul" className="table">
      {children}
    </Element>
  );
};

Table.Heading = Heading;
Table.Body = Body;

export default Table;
