import React from "react";
import { getWine } from "utils/content-util";
import { ShopDetail } from "src/components/frontend";

const ShopDetailPage = (props): JSX.Element => {
  const { wine } = props;
  return <ShopDetail wine={wine} />;
};

export default ShopDetailPage;

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
