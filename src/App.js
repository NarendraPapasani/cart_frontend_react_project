import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import Products from "./components/Products";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import EleCategory from "./components/EleCategory";
import ProductItemDetails from "./components/ProductItemDetails";
import WishList from "./components/WishList";
import cartContext from "./context/cartContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import NotFound from "./components/NotFound";
const App = () => {
  const [items, setCartList] = useState([]);
  const [wishItems, setWishList] = useState([]);
  const navigate = useNavigate();
  const addItem = (item, quantity = 1) => {
    const upItem = {
      ...item,
      quantity,
    };
    setCartList([...items, upItem]);
    navigate("/cart");
  };

  const removeItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setCartList(newItems);
  };

  const removeFromWishList = (id) => {
    let newItems = wishItems.filter((item) => item.id !== id);
    setWishList(newItems);
  };
  const quantityChange = (id, quantity) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });
    setCartList(newItems);
  };

  const quantityWishChange = (id, quantity) => {
    let newItems = wishItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });
    setWishList(newItems);
  };
  const [globalSearchInput, setsglobalSearchInput] = useState("");
  const setglobalSearchInput = (val) => {
    console.log(val);
    setsglobalSearchInput(val);
    navigate("/products");
  };
  const addToWishList = (item, quantity = 1) => {
    const upItem = {
      ...item,
      quantity,
    };
    setWishList([...wishItems, upItem]);
    navigate("/wishlist");
  };
  return (
    <cartContext.Provider
      value={{
        items,
        addItem: addItem,
        removeItem: removeItem,
        quantityChange: quantityChange,
        globalSearchInput: globalSearchInput,
        setglobalSearchInput: setglobalSearchInput,
        addToWishList: addToWishList,
        wishItems: wishItems,
        quantityWishChange: quantityWishChange,
        removeFromWishList: removeFromWishList,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProtectedRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/:id" element={<ProtectedRoute />}>
          <Route path="/:id" element={<EleCategory />} />
        </Route>
        <Route path="/wishlist" element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<WishList />} />
        </Route>
        <Route path="/products/:productId" element={<ProtectedRoute />}>
          <Route path="/products/:productId" element={<ProductItemDetails />} />
        </Route>
        <Route path="/cart" element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/check-out" element={<ProtectedRoute />}>
          <Route path="/check-out" element={<CheckOut />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </cartContext.Provider>
  );
};

export default App;
