import React from "react";
import { Image, Link } from "src/components/ui";

const Shop = (): JSX.Element => {
  return (
    <Link href="/shop">
      <Image
        src="/icons/shop/shop.svg"
        alt="img"
        width="35px"
        height="35px"
        className="shop-icon"
      />
    </Link>
  );
};

export default Shop;
