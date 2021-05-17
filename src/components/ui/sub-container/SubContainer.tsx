import React from "react";
import { SubContainerPropsTypes } from "./types";

const SubContainer = (props: SubContainerPropsTypes): JSX.Element => {
  const { children, className: customClassName, as } = props;

  const Wrapper = as;

  const className =
    (customClassName && `sub-container ${customClassName}`) || "sub-container";

  return <Wrapper className={className}>{children}</Wrapper>;
};

export default SubContainer;
