import Navbar from "../Navbar";
import CartListView from "../CartListView";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./index.css";
import CartSummary from "../CartSummary";
const Cart = () => {
  const { items } = useContext(cartContext);
  return (
    <>
      <Navbar />
      <div>
        {items.length === 0 ? (
          <h1 className="c-h">Cart</h1>
        ) : (
          <div className="cart-head-cont">
            <h1 className="c-h">Cart</h1>
            <Link to="/products">
              <button className="submit-btnss">Buy More</button>
            </Link>
          </div>
        )}
        <div className="cart-details-cont">
          <CartListView />
          {items.length !== 0 && <CartSummary items={items} />}
        </div>
      </div>
    </>
  );
};

export default Cart;
