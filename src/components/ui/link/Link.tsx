import React from "react";
import Link from "next/link";
import { LinkProps } from "./types";
import ActiveLink from "./ActiveLink";

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

LinkUi.ActiveLink = ActiveLink;

export default LinkUi;
