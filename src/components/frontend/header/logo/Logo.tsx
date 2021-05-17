import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width="200px"
        height="60px"
        objectFit="contain"
        className="logo"
      />
    </Link>
  );
};

export default Logo;
