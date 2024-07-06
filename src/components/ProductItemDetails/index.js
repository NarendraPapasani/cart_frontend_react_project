import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";
import ProductCard from "../ProductCard";

const overrideStyles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ProductItemDetails = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [similarproducts, setSimilarProducts] = useState([]);
  const getFormattedData = (data) => ({
    availability: data.availability,
    brand: data.brand,
    description: data.description,
    id: data.id,
    imageUrl: data.image_url,
    price: data.price,
    rating: data.rating,
    title: data.title,
    totalReviews: data.total_reviews,
  });

  useEffect(() => {
    getProductsInDetail();
  });

  const getProductsInDetail = async () => {
    try {
      setLoading(true);
      const jwtToken = Cookies.get("jwtToken");
      const url = `https://apis.ccbp.in/products/${productId}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const formattedData = getFormattedData(data);
      setProduct(formattedData);

      const formattedSimilarProducts = data.similar_products.map((product) =>
        getFormattedData(product)
      );
      setSimilarProducts(formattedSimilarProducts);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const Loader = () => {
    return (
      <div>
        <Navbar />
        <div className="sweet-loading">
          <ClipLoader
            cssOverride={overrideStyles}
            size={150}
            color={"#123abc"}
            loading={isLoading}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  };
  const {
    imageUrl,
    title,
    brand,
    rating,
    totalReviews,
    price,
    availability,
    description,
  } = product;
  return (
    <div>
      <Navbar />
      <div className="product-page">
        <div className="product-image-container">
          <img src={imageUrl} alt={title} className="product-image" />
        </div>
        <div className="product-details">
          <h1 className="product-title">{title}</h1>
          <p className="product-brand">
            Brand: <span className="brand-name">{brand}</span>
          </p>
          <div className="product-rating">
            <span className="rating">{rating}</span>
            <span className="total-reviews"> ({totalReviews} reviews)</span>
          </div>
          <p className="product-price">${price}</p>
          <p className="product-availability">
            Availability:{" "}
            {availability ? (
              <span className="in-stock">In Stock</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </p>
          <div className="product-quantity">
            <label htmlFor="quantity" className="quantity-label">
              Quantity:
            </label>
            <div className="quantity-selector">
              <button
                className="quantity-btn"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-input"
              />
              <button
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button className="buy-now-button">
            <i className="fas fa-shopping-cart"></i> Buy Now
          </button>
          <div className="product-description">
            <h3 className="section-heading">Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="product-pages">
        <h3 className="section-headingss">Simlar Products</h3>
        <ul className="similar">
          {similarproducts.map((each) => (
            <ProductCard key={each.id} each={each} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductItemDetails;
