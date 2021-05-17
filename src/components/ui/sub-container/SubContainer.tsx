import React from "react";
import { SubContainerPropsTypes } from "./types";

const SubContainer = (props: SubContainerPropsTypes): JSX.Element => {
  const { children, className: customClassName } = props;

  const className =
    (customClassName && `sub-container ${customClassName}`) || "sub-container";

  return <section className={className}>{children}</section>;
};

export default SubContainer;
