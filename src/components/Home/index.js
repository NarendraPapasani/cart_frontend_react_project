import Navbar from "../Navbar";
import React, { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const categoryOptions = [
  {
    name: "Clothing",
    categoryId: "1",
  },
  {
    name: "Electronics",
    categoryId: "2",
  },
  {
    name: "Appliances",
    categoryId: "3",
  },
  {
    name: "Grocery",
    categoryId: "4",
  },
  {
    name: "Toys",
    categoryId: "5",
  },
];

const Home = () => {
  const { setglobalSearchInput } = useContext(cartContext);
  const [isLoading, setLoading] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infiniteLoop: true,
    autoPlay: true,
    autoplaySpeed: 1500,
    dynamicHeight: true,
  };
  const navigate = useNavigate();
  const watchClick = () => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken === undefined) {
      navigate("/login");
    } else {
      navigate("/products");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <Carousel {...settings}>
          <div className="carousel-div">
            <img
              src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719413430/wgqyqypxcgez41rrq5a1.webp"
              alt="offer"
            />
          </div>

          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f21c8c88a0bb63e0.png?q=20"
              alt="offer"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/48d216e35dbd226f.jpg?q=20"
              alt="offer"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f888f8f443a8a927.jpg?q=20"
              alt="offer"
            />
          </div>
        </Carousel>
        <h2 className="cate-head">Categories</h2>
        <Slider {...settings}>
          <div>
            <div className="slick-div">
              <img
                src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719379799/fcuysk6o7nuhybjt242n.jpg"
                className="slick-img"
                alt="cate"
              />
              <p className="slick-para">Smart Watches from 1999/-</p>
              <Link
                to={`/products`}
                className="login-butt"
                onClick={watchClick}
              >
                Check Now
              </Link>
            </div>
          </div>
          <div>
            <div className="slick-div">
              <img
                src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719380496/v2tlkflkoonvxrnck1sm.jpg"
                className="slick-img"
                alt="cate"
              />
              <p className="slick-para">Washing Machines from 8999/-</p>
              <Link
                to={`/products`}
                className="login-butt"
                onClick={watchClick}
              >
                Check Now
              </Link>
            </div>
          </div>
          <div>
            <div className="slick-div">
              <img
                src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719382331/ck2wpebcisojxes8lirf.jpg"
                className="slick-img"
                alt="cate"
              />
              <p className="slick-para">Trending Clothes starting at 199/-</p>
              <Link
                to={`/products`}
                className="login-butt"
                onClick={watchClick}
              >
                Check Now
              </Link>
            </div>
          </div>
          <div>
            <div className="slick-div">
              <img
                src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719382447/nkaueqpmxqhhddkmszye.jpg"
                className="slick-img"
                alt="cate"
              />
              <p className="slick-para">Daily required Groceries </p>
              <Link
                to={`/products`}
                className="login-butt"
                onClick={watchClick}
              >
                Check Now
              </Link>
            </div>
          </div>
          <div>
            <div className="slick-div">
              <img
                src="https://res.cloudinary.com/dlxhrbeyr/image/upload/v1719382579/fbpxgpkdcmrtr9ayok3f.jpg"
                className="slick-img"
                alt="cate"
              />
              <p className="slick-para">Trending Toys Starting at 99/-</p>
              <Link
                to={`/products`}
                className="login-butt"
                onClick={watchClick}
              >
                Check Now
              </Link>
            </div>
          </div>
        </Slider>
        <div className="why-choose-us">
          <h2 className="cate-head">Why Choose Our E-commerce Platform</h2>
          <div className="features">
            <div className="feature">
              <i className="fas fa-truck"></i>
              <h3>Fast Delivery</h3>
              <p>
                We offer lightning-fast delivery to ensure you receive your
                orders promptly.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-lock"></i>
              <h3>Secure Payments</h3>
              <p>
                Your payment information is protected with industry-standard
                encryption for a safe shopping experience.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-comments"></i>
              <h3>Excellent Customer Support</h3>
              <p>
                Our dedicated support team is available 24/7 to assist you with
                any questions or concerns.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-tag"></i>
              <h3>Competitive Prices</h3>
              <p>
                We offer competitive prices on a wide range of products to
                ensure you get the best value for your money.
              </p>
            </div>
          </div>
          <section class="subscription-plans">
            <h2 className="cate-head">Choose Your Subscription Plan</h2>
            <div class="plan-container">
              <div class="plan-card">
                <div class="plan-header">
                  <h3>Normal</h3>
                  <p class="plan-price">$9.99/month</p>
                </div>
                <div class="plan-features">
                  <ul className="li">
                    <li className="li">Access to basic features</li>
                    <li className="li">Limited product categories</li>
                    <li className="li">Standard shipping</li>
                    <li className="li">Discounts Up to 10%</li>
                  </ul>
                </div>
                <button class="plan-btn">Subscribe</button>
              </div>
              <div class="plan-card premium">
                <div class="plan-header">
                  <h3>Premium</h3>
                  <p class="plan-price">$19.99/month</p>
                </div>
                <div class="plan-features">
                  <ul className="li">
                    <li className="li">Access to all features</li>
                    <li className="li">Free express shipping</li>
                    <li className="li">More Bank Offers</li>
                    <li className="li">Discounts Up to 20%</li>
                  </ul>
                </div>
                <button class="plan-btn">Subscribe</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <div class="footer-container">
          <div class="footer-row">
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Our Services</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
                <li>
                  <p>Affiliate Program</p>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <p>FAQ</p>
                </li>
                <li>
                  <p>Shipping</p>
                </li>
                <li>
                  <p>Returns</p>
                </li>
                <li>
                  <p>Order Status</p>
                </li>
                <li>
                  <p>Payment Options</p>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Online Shop</h4>
              <ul>
                <li>
                  <p>Clothing</p>
                </li>
                <li>
                  <p>Electronics</p>
                </li>
                <li>
                  <p>Toys</p>
                </li>
                <li>
                  <p>Groceries</p>
                </li>
                <li>
                  <p>Payment Options</p>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Follow Us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2024 Created By{" "}
            <span className="span">Narendra Papasani Full Stack Developer</span>{" "}
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
