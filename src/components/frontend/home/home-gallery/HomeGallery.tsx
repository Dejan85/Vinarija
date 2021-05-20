import React from "react";
import { SubContainer, CarouselUi } from "src/components/ui";

const HomeGallery = (): JSX.Element => {
  return (
    <SubContainer className="home-gallery" as="section">
      <h1 className="home-gallery__heading">Nasi vinogradi</h1>

      <CarouselUi />
    </SubContainer>
  );
};

export default HomeGallery;
