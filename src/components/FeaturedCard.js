import React from "react";
import { Link } from "react-router-dom";

export const FeaturedCard = ({ img, title, productLength, productUrl }) => {
  return (
    <div
      className="cat-item d-flex flex-column border mb-4"
      style={{ padding: "30px" }}
    >
      <p className="text-right">{productLength} Products</p>
      <Link
        to={productUrl}
        className="cat-img position-relative overflow-hidden mb-3"
      >
        <img
          className="img-fluid"
          src={img}
          alt={title}
          style={{ maxHeight: "150px" }}
        />
      </Link>
      <h5 className="font-weight-semi-bold m-0">
        <Link to={productUrl}>{title}</Link>
      </h5>
    </div>
  );
};
