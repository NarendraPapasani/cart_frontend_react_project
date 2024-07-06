import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import EleCategory from "./components/EleCategory";
import ProductItemDetails from "./components/ProductItemDetails";
import WishList from "./components/WishList";

const App = () => (
  <Router>
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
    </Routes>
  </Router>
);

export default App;
