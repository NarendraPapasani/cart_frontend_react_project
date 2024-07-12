import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../../context/cartContext";
const ProductCard = (props) => {
  const naviagte = useNavigate();
  const { addToWishList, quantityWishChange, addItem } =
    useContext(cartContext);
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
              className="buy-now-buttons"
              onClick={() => naviagte("/products/${id}")}
            >
              Click here
            </button>
          </div>
          <p>
            click for more details...
            <FaArrowRight />
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
