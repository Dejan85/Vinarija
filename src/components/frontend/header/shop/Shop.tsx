import React from "react";
import Image from "next/image";
import Link from "next/link";

const Shop = (): JSX.Element => {
  return (
    <Link href="/shop">
      <Image
        src="/icons/shop/shop.svg"
        alt="img"
        width="35px"
        height="35px"
        className="shop"
      />
    </Link>
  );
};

export default Shop;
