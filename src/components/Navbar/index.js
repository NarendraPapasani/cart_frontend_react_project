import "./index.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ClipLoader from "react-spinners/ClipLoader";
import Products from "../Products";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const overrideStyles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Navbar = ({ onSearch }) => {
  const { items, globalSearchInput, setglobalSearchInput, wishItems } =
    useContext(cartContext);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [cssName, changeCssName] = useState("home-active");
  const [searchValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const loginButtClick = () => {
    navigate("/login");
  };
  const jwtToken = Cookies.get("jwtToken");
  const clickLogout = () => {
    setLoading(true);
    Cookies.remove("jwtToken");
    setLoading(false);
    navigate("/login");
  };

  const searchInput = (event) => {
    const val = event.target.value;
    setInputValue(val);
  };

  const renderSearchedValues = () => {
    setglobalSearchInput(searchValue);
  };

  const Loader = () => {
    return (
      <div className="sweet-loading">
        <ClipLoader
          cssOverride={overrideStyles}
          size={150}
          color={"#123abc"}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  };
  let a, b, c;

  const renderNavbar = () => {
    return (
      <nav className="navbar-cont">
        <img
          src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719333725/ifpidn8ynhwfs4nce78b.jpg"
          alt="logo"
          className="web-logo"
          onClick={() => navigate("/")}
        />
        <div class="search-container">
          <input
            type="search"
            class="search-input"
            placeholder="Search..."
            onChange={searchInput}
          />
          <div className="search-icon">
            <i className="fas fa-search" onClick={renderSearchedValues}></i>
          </div>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">
              <p
                className={`nav-link ${a}`}
                onClick={() => setActiveTab("home")}
              >
                Home
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products">
              <p
                className={`nav-link ${b}`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </p>
            </Link>
          </li>
          {jwtToken !== undefined && (
            <li className="nav-item">
              <Link to="/wishlist">
                <button className="wishlist-button__btn">
                  <i className="fa fa-heart"></i>
                  <span className="wishlist-button__count">
                    {wishItems.count}
                  </span>
                </button>
              </Link>
            </li>
          )}
          {jwtToken !== undefined && (
            <Link to="/cart" className="cart-button">
              <span className="cart-icon"></span>
              <i className="fas fa-shopping-cart"></i>

              <span className="cart-count">{items.length}</span>
            </Link>
          )}
          <li className="nav-item">
            {jwtToken !== undefined ? (
              <button
                className="login-butt-logout"
                type="button"
                onClick={clickLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="login-butt"
                type="button"
                onClick={loginButtClick}
              >
                Login/Signup
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  };
  if (loading) {
    return Loader();
  } else {
    return renderNavbar();
  }
};

export default Navbar;
