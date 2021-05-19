import React from "react";
import { SubContainer } from "src/components/ui";
import Product from "src/components/frontend/home/home-products/partials/Product";
import Link from "next/link";

const Products = (): JSX.Element => {
  return (
    <>
      <SubContainer className="products" as="section">
        <Product
          heading="Chardonnay"
          image="/images/home/products/wine-1.png"
        />
        <Product
          heading="Sauvignon Blanc"
          image="/images/home/products/wine-2.png"
        />
        <Product
          heading="Cabernet Sauvignon"
          image="/images/home/products/wine-3.png"
        />
        <Product heading="Merlot" image="/images/home/products/wine-4.png" />
        <Product
          heading="Pinot Noir"
          image="/images/home/products/wine-5.png"
        />
        <Product heading="Rose" image="/images/home/products/wine-6.png" />
      </SubContainer>
      <Link href="/">
        <a className="products__link">Pogledajte više</a>
      </Link>
    </>
  );
};

export default Products;
