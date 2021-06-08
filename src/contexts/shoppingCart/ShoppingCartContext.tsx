import { createContext, useState } from "react";

const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const { sum, id }: { sum: number; id: string } = product;
    const set = new Set();

    if (cart.length) {
      const newCart = [...cart, { ...product }];

      const filteredArr = newCart.filter((item) => {
        const duplicate = set.has(item.id);

        if (item.id === id && sum !== 1) {
          item.sum = sum;
          item.price = item.price * sum;
        }

        set.add(item.id);

        return !duplicate;
      });

      return setCart(filteredArr);
    }

    setCart([...cart, { ...product }]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        setCart,
        cart,
        addProductToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
