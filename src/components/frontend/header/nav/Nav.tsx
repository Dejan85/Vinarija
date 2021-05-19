import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Nav = (): JSX.Element => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navigation-width",
      `${toggleNav ? "100%" : "0%"}`
    );
  }, [toggleNav]);

  return (
    <nav className="nav">
      <Hamburger onToggle={toggleHandler} />
    </nav>
  );
};

export default Nav;
