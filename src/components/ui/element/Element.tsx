import React, { memo } from "react";
import { ElementProps } from "./types";

const Element = (props: ElementProps): JSX.Element => {
  const { as: Wrapper, className, children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default memo(Element);
