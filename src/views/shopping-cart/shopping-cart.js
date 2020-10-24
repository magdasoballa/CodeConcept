import React from "react";
import { Main } from "../../components/main/Main";
import { Side } from "../../components/side/Side";
import { ShopContextProvider } from "./context/shopping-data-context";
import "./styles.scss";

export const ShoppingCart = () => {
  return (
    <div className="container">
      <ShopContextProvider>
        <Main />
        <Side />
      </ShopContextProvider>
    </div>
  );
};
