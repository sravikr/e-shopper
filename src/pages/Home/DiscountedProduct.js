import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../../components";
import { Subscribe } from "./Subscribe";

export const DiscountedProduct = () => {
  const { fetchData } = useFetch("https://dummyjson.com/products");
  const discountPercentageCate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.discountPercentage >= "15";
    });

  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trandy Products</span>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {discountPercentageCate &&
              discountPercentageCate.map((cate) => {
                return (
                  <div className="col-md-4">
                    <ProductCard {...cate} />
                  </div>
                );
              })}
          </div>
        </div>
        <Subscribe />
      </div>
      {/* Products End */}
    </>
  );
};
