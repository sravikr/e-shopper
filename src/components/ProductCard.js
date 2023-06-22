import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  thumbnail,
  title,
  price,
  discountedPrice,
  discountPercentage,
  ...cate
}) => {
  return (
    <div className="card product-item border-0 mb-4">
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img
          className="img-fluid w-100"
          src={thumbnail}
          alt=""
          style={{ height: "200px" }}
        />
      </div>
      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3">{title}</h6>
        <div className="d-flex justify-content-center">
          <h6>${price}</h6>
          <h6 className="text-muted ml-2">
            <del>{discountPercentage}%</del>
          </h6>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light border">
        <Link to={`/products/${cate.id}`} className="btn btn-sm text-dark p-0">
          <i className="fas fa-eye text-primary mr-1" />
          View Detail
        </Link>

        <Link to="/" className="btn btn-sm text-dark p-0">
          <i className="fas fa-shopping-cart text-primary mr-1" />
          Add To Cart
        </Link>
      </div>
    </div>
  );
};
