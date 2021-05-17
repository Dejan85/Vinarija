import React from "react";
import Image from "next/image";

const Logo = (): JSX.Element => {
  return (
    <Image
      src="/images/logo/logo.png"
      alt="logo"
      width="200px"
      height="60px"
      objectFit="contain"
    />
  );
};

export default Logo;
