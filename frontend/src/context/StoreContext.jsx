import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const URL = "http://localhost:4000";
  const [token,setToken] = useState("");

useEffect(() => {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
},[])
  // addToCart
  const addToCart = (itemId) => {
    setCartItem(prev => ({
      ...prev,[itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    if ( cartItem[itemId]  > 1 ) {
        setCartItem(prev => ({
          ...prev,[itemId]:prev[itemId]-1
        }))

    }else{
      const updatedCart = {...cartItem};
      delete updatedCart[itemId]
      setCartItem(updatedCart)
    }
  }

  
    const getTotalFromAmount = () => {
      let totalAmount = 0;
      for(const item in cartItem){ 
        let findItem = food_list.find((product) => product._id === item)
        // the cartItem[item] is like this value of the id 1 
        totalAmount += findItem.price * cartItem[item]
      }
      return totalAmount
    }


  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalFromAmount,
    URL,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
