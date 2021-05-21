import React from "react";
import { Image, Link } from "src/components/ui";

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width="150px"
        height="60px"
        objectFit="contain"
        className="logo"
      />
    </Link>
  );
};

export default Logo;
