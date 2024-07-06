import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { each, productCardClick, handleWishlist, handleBuyNow } = props;
  const { title, brand, price, id, imageUrl, rating } = each;
  const handleProductCard = () => {
    productCardClick(each.id);
  };

  return (
    <li className="product-cards" onClick={handleProductCard}>
      <Link to={`/products/${id}`} className="product-links">
        <div className="product-image-containers">
          <img src={imageUrl} alt={title} className="product-images" />
        </div>
        <div className="product-detailss">
          <h3 className="product-titles">{title}</h3>
          <p className="product-brands">{brand}</p>
          <p className="product-prices">${price.toFixed(2)}</p>
          <div className="button-containers">
            <button
              className="wishlist-buttons"
              onClick={() => handleWishlist(id)}
            >
              &#10084; Wishlist
            </button>
            <button
              className="buy-now-buttons"
              onClick={() => handleBuyNow(id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
