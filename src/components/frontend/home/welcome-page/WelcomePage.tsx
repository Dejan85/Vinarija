import React, { useEffect } from "react";
import {
  SubContainer,
  Element,
  Button,
  Heading,
  Image,
} from "src/components/ui";

const WelcomePage = (props): JSX.Element => {
  const {
    welcomePage: {
      data: { heading, image, buttonText },
    },
  } = props;

  return (
    <Element as="section" className="welcome-page">
      <Element as="div" className="welcome-page__video-container">
        <video autoPlay muted loop>
          <source
            src="/images/home/welcome-page/background.mp4"
            type="video/mp4"
          ></source>
        </video>
        <Heading as="h1" className="welcome-page__heading">
          <span className="welcome-page__heading-span">Godine su samo broj, nisu bitne</span> <br />
          <span className="welcome-page__heading-span">osim ako ste kojim slucajem boca vina.</span>
        </Heading>
      </Element>
    </Element>
  );
};

export default WelcomePage;
