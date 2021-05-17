import React from "react";
import Image from "next/image";
import Link from "next/link";

const Shop = (): JSX.Element => {
  return (
    <Link href="/shop">
      <Image
        src="/icons/shop/shop.svg"
        alt="img"
        width="50px"
        height="50px"
        className="shop"
      />
    </Link>
  );
};

export default Shop;
