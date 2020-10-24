import React, { useContext, useState, useEffect } from "react";
import { List } from "../list/List";
import { ProductData } from "../productData/ProductData";
import { ShopContext } from "../../views/shopping-cart/context/shopping-data-context";
import { fetchCartItems } from "../../services/fetchCartItems";
import mockProductData from "../../mocks/data";
import "./styles.scss";

export const Main = () => {
  const { updateData, handleReset } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleDeleteProduct = (id) => {
    setProductData(productData.filter((el) => el.id !== id));
    handleReset();
  };

  const fetchProductData = () => {
    setProductData(fetchCartItems());
  };

  return (
    <div>
      <h1 className="title">Shopping Cart</h1>
      <main className="cart-wrapper">
        <List />
        <hr />
        {productData.map((product) => (
          <ProductData
            key={product.id}
            name={product.name}
            price={product.price}
            shippingCost={product.defaultShippingCost}
            picture={product.picture}
            func={() => handleDeleteProduct(product.id)}
          />
        ))}
        {productData.length === 0 && (
            <div className="empty-list-message">
                Our list is empty
            </div>
        )}
        <hr />
        {productData.length !== 0 && (
          <div className="cart-footer">
            <button className="update-cart-btn" onClick={updateData}>
              Update Shopping Cart
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
