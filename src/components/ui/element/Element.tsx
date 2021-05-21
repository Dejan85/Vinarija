import React from "react";
import { ElementProps } from "./types";

const Element = (props: ElementProps): JSX.Element => {
  const { as: Wrapper, className } = props;
  return <Wrapper className={className} />;
};

export default Element;
