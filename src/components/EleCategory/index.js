import Products from "../Products";
import "./index.css";
import { useState } from "react";
import Navbar from "../Navbar";
import Cookies from "js-cookie";
import SelectedFilterComponent from "../SelectedFilterComponent";
import FilterComponent from "../FilterComponent";
import RatingComponent from "../RatingComponent";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const overrideStyles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
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
const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

const ratingsList = [
  {
    ratingId: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    ratingId: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    ratingId: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    ratingId: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
];
const EleCategory = () => {
  //   const location = useLocation();
  //   const [productsList, setProductsList] = useState([]);
  //   const [searchValue, setSearchValue] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [filterList, setFilterList] = useState([]);
  //   const [activeFilterId, setActiveFilterId] = useState("");
  //   const [ratingItem, setRatingItem] = useState("");
  //   const [sortItem, setSortItem] = useState(sortbyOptions[0].optionId);
  //   useEffect(() => {
  //     getProducts();
  //   }, [activeFilterId, ratingItem, sortItem]);

  //   // useEffect(() => {
  //   //   if (location.state) {
  //   //     const activeFilterIdFromLocation = location.state.data;
  //   //     setActiveFilterId(activeFilterIdFromLocation);
  //   //   }
  //   // }, [location.state]);
  //   const getProducts = async () => {
  //     setIsLoading(true);
  //     const jwtToken = Cookies.get("jwtToken");
  //     const url = `https://apis.ccbp.in/products?sort_by=${sortItem}&category=${activeFilterId}&title_search=${searchValue}&rating=${ratingItem}`;
  //     const opt = {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //     };
  //     const resp = await fetch(url, opt);
  //     const respData = await resp.json();
  //     const updatedData = respData.products.map((product) => ({
  //       title: product.title,
  //       brand: product.brand,
  //       price: product.price,
  //       id: product.id,
  //       imageUrl: product.image_url,
  //       rating: product.rating,
  //     }));
  //     setProductsList(updatedData);
  //     setIsLoading(false);
  //   };
  //   const filterClickProduct = (each) => {
  //     setActiveFilterId(each.categoryId);
  //     const isPresent = filterList.includes(each);
  //     if (isPresent) {
  //       const index = filterList.indexOf(each);
  //       filterList.splice(index, 1);
  //     } else {
  //       filterList.push(each);
  //     }
  //     setFilterList([...filterList]);
  //   };

  //   const filterClearProduct = (each) => {
  //     const index = filterList.indexOf(each);
  //     filterList.splice(index, 1);
  //     setFilterList([...filterList]);
  //   };

  //   const filterClearAll = () => {
  //     setFilterList([]);
  //     setActiveFilterId("");
  //     setRatingItem("");
  //     setSortItem(sortbyOptions[0].optionId);
  //   };

  //   const clickEachRatingProduct = (each) => {
  //     setRatingItem(each.ratingId);
  //   };

  //   const clickSortProduct = (event) => {
  //     setSortItem(event.target.value);
  //   };
  //   const searchInput = (event) => {
  //     setSearchValue(event.target.value);
  //   };

  //   const productCardClick = (id) => {};

  //   const renderSearchedValues = () => {
  //     const filteredProducts = productsList.filter((each) =>
  //       each.title.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     setProductsList(filteredProducts);
  //   };
  return (
    <>
      <Products />
    </>
  );
};

export default EleCategory;
