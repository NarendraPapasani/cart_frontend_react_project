import React, { useState } from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import "./index.css";

const CartItem = (props) => {
  const {
    id,
    imageUrl,
    title,
    brand,
    rating,
    totalReviews,
    price,
    availability,
    quantity,
    onQuantityChange,
  } = props.item;
  const { items, addItem, removeItem, quantityChange } =
    useContext(cartContext);
  // State to track if the item is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  const handleQuantityIncrement = () => {
    quantityChange(id, quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      quantityChange(id, quantity - 1);
    } else {
      removeItem(id);
    }
  };

  const handleRemoveItem = () => {
    removeItem(props.item.id);
  };

  return (
    <div
      className="cart-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="item-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <p className="item-brand">{brand}</p>
        <div className="item-rating">
          <span className="rating">{rating}</span>
          <span className="total-reviews">({totalReviews} reviews)</span>
        </div>
        <p className="item-price">${price}</p>
        <p className="item-availability">
          Availability: {availability ? "In Stock" : "Out of Stock"}
        </p>
        <div className="quantity-controls">
          <button
            className={`quantity-btn ${isHovered ? "animate" : ""}`}
            onClick={handleQuantityDecrement}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className={`quantity-btn ${isHovered ? "animate" : ""}`}
            onClick={handleQuantityIncrement}
          >
            +
          </button>
        </div>
      </div>
      <button
        className={`remove-btn ${isHovered ? "animate" : ""}`}
        onClick={handleRemoveItem}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
