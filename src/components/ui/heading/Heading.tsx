import React from "react";
import { HeadingProps } from "./types";

const Heading = (porps: HeadingProps): JSX.Element => {
  const { as: Wrapper, children } = porps;
  return <Wrapper className={`heading-${Wrapper}`}>{children}</Wrapper>;
};

export default Heading;
