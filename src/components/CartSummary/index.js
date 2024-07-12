import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ items, shippingCost = 10 }) => {
  const naviagte = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const calculateTotalCost = () => {
    const totalCost = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    const discountedTotalCost = totalCost * 0.9; // Apply 10% discount
    const discountAmount = totalCost - discountedTotalCost;
    return {
      totalCost: totalCost.toFixed(2),
      discountedTotalCost: discountedTotalCost.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      finalCost: (totalCost - discountAmount + shippingCost).toFixed(2),
    };
  };

  const { totalCost, discountedTotalCost, discountAmount, finalCost } =
    calculateTotalCost();

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };
  const submitCupon = () => {
    if (couponCode === "neeku free eh") {
      alert(
        "cupon ledu em ledu muskoni motham kattu.already paina 10% ichaga.inka enduku bey"
      );
    } else {
      alert("invalid cupon code");
      setCouponCode("");
    }
  };
  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <div className="summary-details">
        <div className="summary-row">
          <span>Total Cost:</span>
          <span>${totalCost}</span>
        </div>
        <div className="summary-row">
          <span>Discount (10%):</span>
          <span className="discount-amount animate__animated animate__bounce">
            -${discountAmount}
          </span>
        </div>
        <div className="summary-row">
          <span className="discounted-price-label">Discounted Price:</span>
          <span className="discounted-price animate__animated animate__fadeInDown">
            ${discountedTotalCost}
          </span>
        </div>
        <div className="summary-row">
          <span>Shipping Cost:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span className="discounted-price-label">Final Price:</span>
          <span className="discounted-price animate__animated animate__fadeInDown">
            ${finalCost}
          </span>
        </div>
        <div className="summary-row">
          <span>Coupon Code:</span>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={handleCouponCodeChange}
          />
        </div>
        <button className="apply-coupon-btn" onClick={submitCupon}>
          Apply Coupon
        </button>
      </div>
      <div className="checkout-actions">
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={handleTermsAccepted}
          />
          I agree to the terms and conditions
        </label>
        <button
          className="checkout-btn"
          disabled={!termsAccepted}
          onClick={() => naviagte("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
