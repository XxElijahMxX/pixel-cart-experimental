import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState
    (false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState
    (0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    const addToCart = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

            setTotalPrice((previousTotalPrice) => previousTotalPrice + product.price * quantity);
            setTotalQuantities((previousTotalQuantities) => previousTotalQuantities + quantity)

            if(checkProductInCart) {
            const updateCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updateCartItems);
            
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }

        toast.success(`${qty} ${product.name} was addded to the cart.`);
    }

    const increaseQty = () =>  {
        setQty((previousQty) => previousQty + 1);
    }

    const decreaseQty = () =>  {
        setQty((previousQty) => {
        if(previousQty -1 < 1) return 1;

         return previousQty - 1;
        });
    } 

    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            increaseQty,
            decreaseQty,
            addToCart
        }}
        >
         {children}
        </Context.Provider>
    )
}



export const useStateContext = () => useContext
(Context);