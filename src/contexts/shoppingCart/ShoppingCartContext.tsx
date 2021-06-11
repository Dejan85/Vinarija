import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [bill, setBill] = useState(0);

  const addProductToCart = (product) => {
    const { sum, id }: { sum: number; id: string } = product;
    const set = new Set();
    var d = new Date();
    var hour = d.getHours();

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

    setCart([{ hour }, ...cart, { ...product }]);
  };

  useEffect(() => {
    if (cart.length) {
      const stringifyCart = JSON.stringify(cart);
      localStorage.setItem("cart", stringifyCart);

      let bill = 0;
      const filteredCart = cart.filter((item) => !item.hour);

      filteredCart.forEach((item, index, arr) => {
        bill = bill + item.price;
      });

      setBill(bill);
    }
  }, [cart]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const stringifyCart = JSON.parse(cart);
      setCart(stringifyCart);
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        setCart,
        cart,
        addProductToCart,
        bill,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
