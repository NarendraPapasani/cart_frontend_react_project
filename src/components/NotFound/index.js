import React from "react";
import "./index.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">
          <i className="fas fa-exclamation-triangle not-found__icon"></i>
          Page Not Found
        </h1>
        <p className="not-found__message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="not-found__link">
          <i className="fas fa-home not-found__icon"></i>
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
