import React from "react";

const Paragraph = (props): JSX.Element => {
  const { as: Wrapper, children, className: customClassName } = props;
  return (
    <Wrapper className={`paragraph ${customClassName ? customClassName : ""}`}>
      {children}
    </Wrapper>
  );
};

export default Paragraph;
