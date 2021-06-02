import React from "react";
import { getWine } from "utils/content-util";

const ShopDetail = (props): JSX.Element => {
  const { wine } = props;
  console.log("test", wine);

  return <div>ShopDetail</div>;
};

export default ShopDetail;

export async function getStaticProps(context) {
  const id = context.params.id;
  const wine = await getWine(id);

  if (!wine) {
    return { notFound: true };
  }

  return {
    props: { wine },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    // fallback: true,
    fallback: "blocking",
  };
}
