import React, { memo } from "react";
import { ElementProps } from "./types";

const Element = (props: ElementProps): JSX.Element => {
  const { as: Wrapper, className, children, style } = props;
  return (
    <Wrapper style={style} className={className}>
      {children}
    </Wrapper>
  );
};

export default memo(Element);
