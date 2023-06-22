import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FeaturedCard } from "../../components";
import { DiscountedProduct } from "./DiscountedProduct";
export const Home = () => {
  const [durl, seturl] = useState(`https://dummyjson.com/products`);
  const { fetchData } = useFetch(durl);

  console.log(fetchData && fetchData);
  const cate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.category === "smartphones";
    });
  const laptopsCate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.category === "laptops";
    });
  const fragrancesCate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.category === "fragrances";
    });
  const skincareCate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.category === "skincare";
    });
  const groceriesCate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.category === "groceries";
    });
  const homeDecorationCate =
    fetchData &&
    fetchData.products.filter((product) => {
      return product.category === "home-decoration";
    });
  // const discountPercentageCate =
  //   fetchData &&
  //   fetchData.products.filter((product) => {
  //     return product.discountPercentage >= "15";
  //   });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {cate &&
          cate.map((cat) => {
            return (
              <div
                key={cat.id}
                className="carousel-inner"
                style={{ height: 410 }}
              >
                <img
                  className="w-100 img-fluid"
                  src={cat.thumbnail}
                  alt="carousel"
                  style={{ height: 410 }}
                />
                <div className=" carousel-item d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 700 }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      {cat.title}
                    </h3>
                    <Link to="/products" className="btn btn-light py-2 px-3">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Top Categories</span>
          </h2>
        </div>
        <div className="row">
          {cate && (
            <div className="col-md-4">
              <FeaturedCard
                productUrl="asdfasd"
                title="Smart Phones"
                productLength={cate.length}
                img={cate.map((cat) => cat.thumbnail)[0]}
              />
            </div>
          )}
          {laptopsCate && (
            <div className="col-md-4">
              <FeaturedCard
                productUrl="asdfasd"
                title="Laptops"
                productLength={laptopsCate.length}
                img={laptopsCate.map((cat) => cat.thumbnail)[0]}
              />
            </div>
          )}
          {fragrancesCate && (
            <div className="col-md-4">
              <FeaturedCard
                productUrl="asdfasd"
                title="Fragrances"
                productLength={fragrancesCate.length}
                img={fragrancesCate.map((cat) => cat.thumbnail)[0]}
              />
            </div>
          )}
          {skincareCate && (
            <div className="col-md-4">
              <FeaturedCard
                productUrl="asdfasd"
                title="Fragrances"
                productLength={skincareCate.length}
                img={skincareCate.map((cat) => cat.thumbnail)[0]}
              />
            </div>
          )}
          {groceriesCate && (
            <div className="col-md-4">
              <FeaturedCard
                productUrl="asdfasd"
                title="Fragrances"
                productLength={groceriesCate.length}
                img={groceriesCate.map((cat) => cat.thumbnail)[0]}
              />
            </div>
          )}
          {homeDecorationCate && (
            <div className="col-md-4">
              <FeaturedCard
                productUrl="asdfasd"
                title="Fragrances"
                productLength={homeDecorationCate.length}
                img={homeDecorationCate.map((cat) => cat.thumbnail)[0]}
              />
            </div>
          )}
        </div>
      </div>
      <DiscountedProduct />
    </>
  );
};
