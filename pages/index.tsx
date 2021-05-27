import { getAllContent } from "utils/content-util";

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
  } = props;

  return (
    <>
      <WelcomePage content={welcomePage} />
      <HomeAbout content={homeAbout} />
      <HomeProducts content={homeProducts} />
      <HomeGallery />
      <HomeMoments />
    </>
  );
};

export const getStaticProps = () => {
  const allContent = getAllContent("home");
  return {
    props: { allContent },
  };
};

export default Index;
