import React from "react";
import { HeadingProps } from "./types";

const Heading = (porps: HeadingProps): JSX.Element => {
  const { as: Wrapper, children, className: customClassName } = porps;
  return (
    <Wrapper
      className={`heading-${Wrapper} ${customClassName ? customClassName : ""}`}
    >
      {children}
    </Wrapper>
  );
};

export default Heading;
