import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

/*const getLocalCartData = () => {
  if (typeof window !== "undefined") {
    let localCartData = localStorage.getItem("CART_ITEMS");
    if (localCartData === []) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  }
};

const initialState = {
  cart: getLocalCartData(),
  setTotalQuantities: "",
  setTotalPrice: "",
};*/

export const StateContext = ({ children }) => {
    //const [state] = useState(initialState)//
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const addToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.price * quantity
    );
    setTotalQuantities(
      (previousTotalQuantities) => previousTotalQuantities + quantity
    );

    if (checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updateCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} was addded to the cart.`);
  };

  const removeFromCart = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (previousTotalPrice) =>
        previousTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (previousTotalQuantities) =>
        previousTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = [...cartItems];

    if (value === "inc") {
      foundProduct.quantity += 1;
      newCartItems[index];
      foundProduct;
      setCartItems(newCartItems);
      setTotalPrice(
        (previousTotalPrice) => previousTotalPrice + foundProduct.price
      );
      setTotalQuantities(
        (previousTotalQuantities) => previousTotalQuantities + 1
      );
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        newCartItems[index];
        foundProduct;
        setCartItems(newCartItems);
        setTotalPrice(
          (previousTotalPrice) => previousTotalPrice - foundProduct.price
        );
        setTotalQuantities(
          (previousTotalQuantities) => previousTotalQuantities - 1
        );
      }
    }
  };

  const increaseQty = () => {
    setQty((previousQty) => previousQty + 1);
  };

  const decreaseQty = () => {
    setQty((previousQty) => {
      if (previousQty - 1 < 1) return 1;

      return previousQty - 1;
    });
  };

  /*useEffect(() => {
    localStorage.setItem("CART_ITEMS", JSON.stringify(state.cart));
  }, [state.cart]);*/

  return (
    <Context.Provider
      value={{
        //...state,//
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
        addToCart,
        toggleCartItemQuantity,
        removeFromCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
