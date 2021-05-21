import React from "react";
import { Element } from "src/components/ui";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps): JSX.Element => {
  const { as: Wrapper, children } = props;
  return (
    <Wrapper className="button">
      {children}
      <Element as="div" className="button__horizontal" />
      <Element as="div" className="button__vertical" />
    </Wrapper>
  );
};

export default Button;
