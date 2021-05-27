import React from "react";
import { Wines } from "src/components/frontend";
import { getAllContent } from "utils/content-util";

const Vina = (props): JSX.Element => {
  const {
    allContent: { winesPage },
  } = props;

  return <Wines content={winesPage} />;
};

export const getStaticProps = () => {
  const allContent = getAllContent("wine");
  return {
    props: { allContent },
  };
};

export default Vina;
