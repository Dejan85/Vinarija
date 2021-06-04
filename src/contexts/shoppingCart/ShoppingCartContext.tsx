import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider
      value={
        {
          // setToggleNav,
          // toggleNav,
          // closeNav,
        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
