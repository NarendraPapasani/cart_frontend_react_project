import "./index.css";
import CartItem from "../CartItem";
import Cartcontext from "../../context/cartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
const CartListView = () => {
  const { items } = useContext(Cartcontext);
  console.log(items);
  return (
    <div>
      {items.length > 0 ? (
        <ul className="c-ul">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="submit-btn">
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartListView;
