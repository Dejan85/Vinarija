import React from "react";
import {
  WelcomePage,
  HomeAbout,
  HomeProducts,
  HomeGallery,
  Navigation,
  HomeMoments,
} from "src/components/frontend";

const Index = (): JSX.Element => {
  return (
    <>
      <WelcomePage />
      <HomeAbout />
      <HomeProducts />
      <HomeGallery />
      <HomeMoments />
    </>
  );
};

export default Index;
