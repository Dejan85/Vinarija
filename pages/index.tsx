import React from "react";
import {
  WelcomePage,
  HomeAbout,
  HomeProducts,
  HomeGallery,
  Navigation,
} from "src/components/frontend";

const Index = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <WelcomePage />
      <HomeAbout />
      {/* <HomeProducts /> */}
      <HomeGallery />
    </>
  );
};

export default Index;
