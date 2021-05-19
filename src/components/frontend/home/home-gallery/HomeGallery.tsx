import React from "react";
import { SubContainer } from "src/components/ui";

const HomeGallery = (): JSX.Element => {
  return (
    <SubContainer className="home-gallery" as="section">
      <h1 className="home-gallery__heading">Nasi vinogradi</h1>

      <h3 className="home-gallery__sub-heading">Podelite vase</h3>
      <h3 className="home-gallery__sub-heading">momente sa nama</h3>
      <span className="home-gallery__span">@RNJAKVINARIJA</span>
    </SubContainer>
  );
};

export default HomeGallery;
