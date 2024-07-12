import Navbar from "../Navbar";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import "./index.css";
import CartSummary from "../CartSummary";
import { Link } from "react-router-dom";
import WishListItem from "../WishListItem";

const WishList = () => {
  const { wishItems, addToWishList } = useContext(cartContext);
  console.log(wishItems);
  return (
    <>
      <Navbar />
      <div>
        {wishItems.length === 0 ? (
          <h1 className="c-h">WishList</h1>
        ) : (
          <div className="cart-head-cont">
            <h1 className="c-h">WishList</h1>
            <Link to="/products">
              <button className="submit-btnss">Add More</button>
            </Link>
          </div>
        )}
        <div>
          {wishItems.length > 0 ? (
            <div className="cart-details-cont">
              <ul>
                {wishItems.map((each) => (
                  <WishListItem
                    key={each.id}
                    item={each}
                    addToWishList={addToWishList}
                  />
                ))}
              </ul>
              {wishItems.length !== 0 && <CartSummary items={wishItems} />}
            </div>
          ) : (
            <div className="empty-cart">
              <div className="empty-cart-content">
                <h2>Empty</h2>
                <p>
                  Looks like you haven't added anything to your wish List yet.
                </p>
                <Link to="/products" className="submit-btn">
                  Add Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
