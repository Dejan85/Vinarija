import React, { useState, useEffect } from "react";
import { Element } from "src/components/ui";
import { Squash as Hamburger } from "hamburger-react";
import { useNavToggle } from "src/hooks";

const Nav = (): JSX.Element => {
  const { toggleNav, hamburgerColor, setToggleNav, closeNav } = useNavToggle();

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Element as="nav" className="nav">
      <Hamburger color={hamburgerColor} onToggle={toggleHandler} />
    </Element>
  );
};

export default Nav;
