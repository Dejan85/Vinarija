import React from "react";
import { Wines } from "src/components/frontend";
import { getAllContent, getAllWines } from "utils/content-util";

const Vina = (props): JSX.Element => {
  const {
    allContent: { winePage },
    allWines: { allWines },
  } = props;

  return <Wines winesPage={winePage} allWines={allWines} />;
};

export const getStaticProps = () => {
  const allContent = getAllContent("wine");
  const allWines = getAllWines("all-wines");
  return {
    props: { allContent, allWines },
  };
};

export default Vina;
