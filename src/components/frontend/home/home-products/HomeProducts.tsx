import React from "react";
import { SubContainer } from "src/components/ui";
import Product from "src/components/frontend/home/home-products/partials/Product";
import Link from "next/link";

const Products = (): JSX.Element => {
  return (
    <>
      <SubContainer className="products" as="section">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </SubContainer>
      <Link href="/">
        <a className="products__link">Pogledajte vise</a>
      </Link>
    </>
  );
};

export default Products;
