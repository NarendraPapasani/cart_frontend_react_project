import React from "react";
import "./index.css";

const WishListItem = ({
  each,
  productCardClick,
  handleWishlist,
  handleBuyNow,
}) => {
  const {
    availability,
    brand,
    description,
    id,
    imageUrl,
    price,
    rating,
    title,
    totalReviews,
  } = each;

  return (
    <div className="wishlist-item-container">
      <div className="wishlist-item-image-container">
        <img src={imageUrl} alt={title} className="wishlist-item-image" />
      </div>
      <div className="wishlist-item-details">
        <h3 className="wishlist-item-title">{title}</h3>
        <p className="wishlist-item-brand">Brand: {brand}</p>
        <div className="wishlist-item-rating">
          <span className="rating">{rating}</span>
          <span className="total-reviews"> ({totalReviews} reviews)</span>
        </div>
        <p className="wishlist-item-price">${price}</p>
        <p className="wishlist-item-availability">
          Availability:{" "}
          {availability ? (
            <span className="in-stock">In Stock</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </p>
        <p className="wishlist-item-description">{description}</p>
        <div className="wishlist-item-actions">
          <button
            className="wishlist-item-button"
            onClick={() => handleWishlist(id)}
          >
            <i className="fas fa-heart"></i> Remove from Wishlist
          </button>
          <button
            className="wishlist-item-button"
            onClick={() => handleBuyNow(id)}
          >
            <i className="fas fa-shopping-cart"></i> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
