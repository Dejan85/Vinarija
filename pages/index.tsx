import React from "react";
import { WelcomePage, HomeAbout, HomeProducts } from "src/components/frontend";

const Index = (): JSX.Element => {
  return (
    <>
      <WelcomePage />
      <HomeAbout />
      <HomeProducts />
    </>
  );
};

export default Index;
