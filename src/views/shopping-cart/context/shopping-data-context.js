import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(11.9);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(23.8);
  const [grandtotal, setGrandtotal] = useState(shipping);
  const [proceed, setProceed] = useState(false);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    quantity >= 1 && setQuantity(quantity - 1);
  };

  const calculatePrice = () => {
    return Number((price * quantity).toFixed(2));
  };

  const calculateShipping = (subtotal) => {
    return subtotal === 100 || subtotal < 100 ? 23.8 : 0;
  };

  const handleGrandTotal = () => {
    setGrandtotal(shipping + parseInt(subtotal));
  };

  const updateData = () => {
    const newSubtotal = calculatePrice();
    const newShipping = calculateShipping(newSubtotal);

    setSubtotal(newSubtotal);
    setShipping(newShipping);
    setGrandtotal(newShipping + newSubtotal);
  };

  const handleProceed = () => {
    if (quantity > 0) {
      setProceed(true);
    }
  };
  const updateCardData = (data) => {
    setCartData(data);
  };

  const handleReset = () => {
    setSubtotal(0);
    setGrandtotal(0);
  };

  return (
    <ShopContext.Provider
      value={{
        handleAdd,
        handleRemove,
        updateData,
        handleGrandTotal,
        handleProceed,
        handleReset,
        grandtotal,
        quantity,
        price,
        subtotal,
        shipping,
        proceed,
        updateCardData,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
