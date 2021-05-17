import React from "react";
import { SubContainer } from "src/components/ui";
import Nav from "src/components/frontend/header/nav";
import Logo from "src/components/frontend/header/logo";
import Shop from "src/components/frontend/header/shop";

const Header = (): JSX.Element => {
  return (
    <SubContainer className="header" as="header">
      <Nav />
      <Logo />
      <Shop />
    </SubContainer>
  );
};

export default Header;
