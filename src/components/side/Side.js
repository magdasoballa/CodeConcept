import React, { useContext } from "react";
import { ShopContext } from "../../views/shopping-cart/context/shopping-data-context";
import "./styles.scss";

export const Side = () => {
  const { subtotal, shipping, grandtotal, handleProceed, proceed } = useContext(
    ShopContext
  );
  return (
    <>
      {!proceed ? (
        <div className="side">
          <div className="header">Proceed to checkout</div>
          <div className="shipping">
            <p>SHIPPING</p>
            <p>${shipping}</p>
          </div>
          <div className="totals">
            <p className="cart-total">CART TOTALS</p>
            <hr style={{ width: "100%" }} />
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="grand">
              <p>Grand total</p>
              <p>${grandtotal}</p>
            </div>
            <div className="centered">
              <div className="checkout" onClick={handleProceed}>
                Proceed to checkout
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="proceed">
          <p>Your order has been submitted successfully!</p>
        </div>
      )}
    </>
  );
};
