import React from "react";
import {
  WelcomePage,
  HomeAbout,
  HomeProducts,
  HomeGallery,
} from "src/components/frontend";

const Index = (): JSX.Element => {
  return (
    <>
      <WelcomePage />
      <HomeAbout />
      <HomeProducts />
      <HomeGallery />
    </>
  );
};

export default Index;
