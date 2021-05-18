import React from "react";
import { SubContainer, Button } from "src/components/ui";
import Image from "next/image";

const WelcomePage = () => {
  return (
    <SubContainer className="welcome-page" as="section">
      <Image
        src="/images/home/welcome-page/background.jpg"
        className="welcome-page__background-image"
        layout="fill"
        objectFit="cover"
      />
      <h1 className="welcome-page__heading">Rnjak Vinarija</h1>
      <a className="welcome-page__link">Pogledajte ponudu</a>
    </SubContainer>
  );
};

export default WelcomePage;
