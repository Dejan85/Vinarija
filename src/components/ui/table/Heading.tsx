import React from "react";
import { Element, Paragraph } from "src/components/ui";
const constants = ["Kolicina", "Artikal", "Dostupnost", "Cena"];

const Heading = (props) => {
  return (
    <Element as="ul" className="table__heading">
      {constants.map((item, index) => (
        <Element as="li" key={index} className="table__heading-li">
          {item}
        </Element>
      ))}
    </Element>
  );
};

export default Heading;
