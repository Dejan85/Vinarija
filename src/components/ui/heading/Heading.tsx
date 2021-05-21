import React from "react";
import { HeadingProps } from "./types";

const Heading = (porps: HeadingProps): JSX.Element => {
  const { as, children } = porps;
  const Wrapper = as;
  return <Wrapper className={`heading-${as}`}>{children}</Wrapper>;
};

export default Heading;
