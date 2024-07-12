import React, { useState } from "react";
import "./index.css";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
const WishListItem = (props) => {
  const { quantityWishChange, removeFromWishList, addItem } =
    useContext(cartContext);
  const {
    id,
    imageUrl,
    title,
    brand,
    rating,
    totalReviews,
    price,
    availability,
    description,
    quantity,
  } = props.item;

  const handleIncrement = () => {
    quantityWishChange(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      quantityWishChange(id, quantity - 1);
    } else {
      removeFromWishList(id);
    }
  };
  const closeItem = () => {
    removeFromWishList(id);
  };

  const clickToCart = () => {
    addItem(props.item, quantity);
    removeFromWishList(id);
  };
  return (
    <div className="wishlist-item">
      <div className="wishlist-item__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="wishlist-item__details">
        <h3 className="wishlist-item__title">{title}</h3>
        <p className="wishlist-item__brand">{brand}</p>
        <div className="wishlist-item__rating">
          <span className="wishlist-item__rating-value">{rating}</span>
          <span className="wishlist-item__rating-count">
            ({totalReviews} reviews)
          </span>
        </div>
        <p className="wishlist-item__price">${price}</p>
        <p className="wishlist-item__availability">{availability}</p>
        <p className="wishlist-item__description">{description}</p>
        <div className="wishlist-item__quantity">
          <button
            className="wishlist-item__quantity-btn"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="wishlist-item__quantity-value">{quantity}</span>
          <button
            className="wishlist-item__quantity-btn"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="wishlist-item__actions">
        <button className="wishlist-item__buy-btn">Buy Now</button>
        <button className="wishlist-item__buy-btn" onClick={clickToCart}>
          Add to Cart
        </button>
        <button className="wishlist-item__close-btn" onClick={closeItem}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
