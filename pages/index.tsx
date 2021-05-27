import { getAllContent, getAllWines } from "utils/content-util";

import {
  WelcomePage,
  HomeAbout,
  HomeProducts,
  HomeGallery,
  HomeMoments,
} from "src/components/frontend";

const Index = (props): JSX.Element => {
  const {
    allContent: { homeAbout, welcomePage, homeProducts },
    allWines: { allWines },
  } = props;

  return (
    <>
      <WelcomePage welcomePage={welcomePage} />
      <HomeAbout homeAbout={homeAbout} />
      <HomeProducts allWines={allWines} homeProducts={homeProducts} />
      <HomeGallery />
      <HomeMoments />
    </>
  );
};

export const getStaticProps = () => {
  const allContent = getAllContent("home");
  const allWines = getAllWines("all-wines");
  return {
    props: { allContent, allWines },
  };
};

export default Index;
