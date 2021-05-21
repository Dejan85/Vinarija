import React from "react";
import Link from "next/link";
import { LinkProps } from "./types";

const Wrapper = "a";

const LinkUi = (props: LinkProps): JSX.Element => {
  const { href, children, className: customClassName } = props;
  return (
    <Link href={href}>
      <Wrapper className={`link ${customClassName ? customClassName : ""}`}>
        {children}
      </Wrapper>
    </Link>
  );
};

export default LinkUi;
