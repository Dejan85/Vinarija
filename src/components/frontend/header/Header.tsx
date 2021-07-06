import React, { useState, useEffect } from "react";
import { SubContainer, Element } from "src/components/ui";
import Nav from "src/components/frontend/header/nav";
import Logo from "src/components/frontend/header/logo";
import Shop from "src/components/frontend/header/shop";

import Headroom from "react-headroom";

const Header = (): JSX.Element => {
  const [show, setShow] = useState(true);

  return (
    <Headroom
      className="headroom"
      style={{
        webkitTransition: "all .5s ease-in-out",
        mozTransition: "all .5s ease-in-out",
        oTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <Element className="header" as="div">
        <Nav />
        <Logo />
        <Shop />
      </Element>
    </Headroom>
  );
};

export default Header;
