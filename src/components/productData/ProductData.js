import React, { useContext } from "react";
import deletebtn from "../../assets/images/x-img.png";
import editbtn from "../../assets/images/edit-img.png";
import { ShopContext } from "../../views/shopping-cart/context/shopping-data-context";
import "./styles.scss";

export const ProductData = ({ name, picture, func }) => {
  const { handleAdd, handleRemove, quantity, price, updateData } = useContext(
    ShopContext
  );

  return (
    <div className="product-data">
      <div className="first-half">
        <img src={deletebtn} alt="delete" onClick={func} />
        <img src={picture} alt="headphones" />
      </div>

      <div className="item">
        <p>{name}</p>
      </div>
      <div className="item">
        <p>${price}</p>
      </div>

      <div className="quantity item">
        <div className="square" onClick={handleRemove}>
          -
        </div>
        <div className="square">{quantity}</div>
        <div className="square" onClick={handleAdd}>
          +
        </div>
        <img src={editbtn} alt="edit" onClick={updateData} />
      </div>
    </div>
  );
};
