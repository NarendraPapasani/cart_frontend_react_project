import "./index.css";
import { useState } from "react";
import Navbar from "../Navbar";
import Cookies from "js-cookie";
import SelectedFilterComponent from "../SelectedFilterComponent";
import FilterComponent from "../FilterComponent";
import ProductCard from "../ProductCard";
import RatingComponent from "../RatingComponent";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
const Products = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [activeFilterId, setActiveFilterId] = useState("");
  const [ratingItem, setRatingItem] = useState("");
  const [sortItem, setSortItem] = useState(sortbyOptions[0].optionId);
  useEffect(() => {
    getProducts();
  }, [activeFilterId, ratingItem, sortItem]);

  // useEffect(() => {
  //   if (location.state) {
  //     const activeFilterIdFromLocation = location.state.data;
  //     setActiveFilterId(activeFilterIdFromLocation);
  //   }
  // }, [location.state]);
  const getProducts = async () => {
    setIsLoading(true);
    const jwtToken = Cookies.get("jwtToken");
    const url = `https://apis.ccbp.in/products?sort_by=${sortItem}&category=${activeFilterId}&title_search=${searchValue}&rating=${ratingItem}`;
    const opt = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const resp = await fetch(url, opt);
    const respData = await resp.json();
    const updatedData = respData.products.map((product) => ({
      title: product.title,
      brand: product.brand,
      price: product.price,
      id: product.id,
      imageUrl: product.image_url,
      rating: product.rating,
    }));
    setProductsList(updatedData);
    setIsLoading(false);
  };
  const filterClickProduct = (each) => {
    setActiveFilterId(each.categoryId);
    const isPresent = filterList.includes(each);
    if (isPresent) {
      const index = filterList.indexOf(each);
      filterList.splice(index, 1);
    } else {
      filterList.push(each);
    }
    setFilterList([...filterList]);
  };

  const filterClearProduct = (each) => {
    const index = filterList.indexOf(each);
    filterList.splice(index, 1);
    setFilterList([...filterList]);
  };

  const filterClearAll = () => {
    setFilterList([]);
    setActiveFilterId("");
    setRatingItem("");
    setSortItem(sortbyOptions[0].optionId);
  };

  const clickEachRatingProduct = (each) => {
    setRatingItem(each.ratingId);
  };

  const clickSortProduct = (event) => {
    setSortItem(event.target.value);
  };
  const searchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const productCardClick = (id) => {};

  const renderSearchedValues = () => {
    const filteredProducts = productsList.filter((each) =>
      each.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsList(filteredProducts);
  };
  const Loader = () => {
    return (
      <div>
        <Navbar />
        <div className="sweet-loading">
          <ClipLoader
            cssOverride={overrideStyles}
            size={150}
            color={"#123abc"}
            loading={isLoading}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  };

  const renderLoginNavigationPage = () => {
    return (
      <div>
        <h1>Your Cart is Missing</h1>
        <button className="login-butt">Login</button>
      </div>
    );
  };

  const renderProductsList = () => {
    return (
      <ul className="products-list-container">
        {productsList.map((each) => (
          <ProductCard
            each={each}
            key={each.id}
            productCardClick={productCardClick}
          />
        ))}
      </ul>
    );
  };
  const renderNotFound = () => {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-description">
            The Product that you are looking for doesn't exist or has been
            moved.
          </p>
          <a href="/" className="not-found-link">
            Go Back Home
          </a>
        </div>
      </div>
    );
  };
  const jwtToken = Cookies.get("jwtToken");
  let a;
  if (jwtToken === undefined) {
    a = renderLoginNavigationPage();
  } else {
    if (isLoading === true) {
      a = Loader();
    } else if (productsList.length === 0) {
      a = renderNotFound();
    } else {
      a = renderProductsList();
    }
  }

  return (
    <div className="products">
      <Navbar />
      <div className="products-container">
        <div className="filter-container">
          <div className="filter-cont">
            <h1 className="filter-head">Filters</h1>
            <button className="clear" onClick={filterClearAll}>
              CLEAR ALL
            </button>
          </div>
          <ul className="filter-list">
            {filterList.map((each) => (
              <SelectedFilterComponent
                key={each.id}
                each={each}
                filterClearProduct={filterClearProduct}
              />
            ))}
          </ul>
          <h1 className="filter-head-2">Categories</h1>
          <ul className="filter-list-2">
            {categoryOptions.map((each) => (
              <FilterComponent
                key={each.categoryId}
                each={each}
                filterClickProduct={filterClickProduct}
                activeFilterId={activeFilterId}
              />
            ))}
          </ul>
          <h1 className="filter-head-2">Rating</h1>
          <ul className="filter-list-2">
            {ratingsList.map((each) => (
              <RatingComponent
                key={each.ratingId}
                each={each}
                clickEachRatingProduct={clickEachRatingProduct}
              />
            ))}
          </ul>
        </div>
        <div className="all-products-container">
          <div class="search-container">
            <input
              type="search"
              class="search-input"
              placeholder="Search products inside results.."
              onChange={searchInput}
              value={searchValue}
            />
            <div className="search-icon">
              <i className="fas fa-search" onClick={renderSearchedValues}></i>
            </div>
          </div>
          <div className="sort-1-cont">
            <h2 className="cate-head-1">All Products</h2>
            <ul className="sort-list">
              <select className="sort-select" onChange={clickSortProduct}>
                {sortbyOptions.map((each) => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </ul>
          </div>
          {a}
        </div>
      </div>
    </div>
  );
};

export default Products;
