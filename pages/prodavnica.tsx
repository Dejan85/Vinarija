import React from "react";
import { getAllContent, getAllWines } from "utils/content-util";
import { Shop } from "src/components/frontend";

const ShopPage = (props): JSX.Element => {
  const { shopContent, allWines } = props;
  return <Shop shopContent={shopContent} allWines={allWines} />;
};

export async function getStaticProps() {
  const shopContent = getAllContent("shop");
  const allWines = getAllWines("all-wines");

  return {
    props: { shopContent, allWines },
  };
}

export default ShopPage;
