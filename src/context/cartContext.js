import React from "react";

const Cartcontext = React.createContext({
  items: [],
  totalAmount: 0,
  wishItems: [],
  quantityWishChange: (id, quantity) => {},
  addToWishList: (item) => {},
  removeFromWishList: (id) => {},
  totalWishListAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  quantityChange: (id, quantity) => {},
  globalSearchInput: "",
  setglobalSearchInput: (val) => {},
});

export default Cartcontext;
