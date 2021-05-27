import React from "react";
import { Wines } from "src/components/frontend";
import { getAllContent, getAllWines } from "utils/content-util";

const Vina = (props): JSX.Element => {
  const {
    allContent: { winesPage },
    allWines: { allWines },
  } = props;

  return <Wines winesPage={winesPage} allWines={allWines} />;
};

export const getStaticProps = () => {
  const allContent = getAllContent("wine");
  const allWines = getAllWines("all-wines");
  return {
    props: { allContent, allWines },
  };
};

export default Vina;
