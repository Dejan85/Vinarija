import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/logo/logo.png"
          alt="logo"
          width="150px"
          height="60px"
          objectFit="contain"
          className="logo"
          draggable="false"
        />
      </a>
    </Link>
  );
};

export default Logo;
