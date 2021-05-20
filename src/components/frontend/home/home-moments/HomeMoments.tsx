import React from "react";
import { SubContainer } from "src/components/ui";

const HomeMoments = (): JSX.Element => {
  return (
    <SubContainer className="home-moments" as="section">
      <h1 className="home-moments__heading">Podelite vase momente sa nama</h1>
      <span className="home-gallery__span">@RNJAKVINARIJA</span>
    </SubContainer>
  );
};

export default HomeMoments;
