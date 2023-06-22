import React, { useState } from "react";
import { Input } from "../../input/Input";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const HeaderTop = (props) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
  };
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-2 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center">
            <NavLink className="text-dark" to="/faqs">
              FAQs
            </NavLink>
            <span className="text-muted px-2">|</span>
            <NavLink className="text-dark" to="/help">
              Help
            </NavLink>
            <span className="text-muted px-2">|</span>
            <NavLink to="/support" className="text-dark">
              Support
            </NavLink>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-dark px-2" href="#asdf">
              <FaFacebookF />
            </a>
            <a className="text-dark px-2" href="#asdf">
              <FaTwitter />
            </a>
            <a className="text-dark px-2" href="#asdf">
              <FaLinkedin />
            </a>
            <a className="text-dark px-2" href="#asdf">
              <i className="fab fa-instagram" />
              <FaInstagram />
            </a>
            <a className="text-dark pl-2" href="#asdf">
              <i className="fab fa-youtube" />
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="row align-items-center py-3 px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <Link to="/" className="text-decoration-none">
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border px-3 mr-1">
                E
              </span>
              Shopper
            </h1>
          </Link>
        </div>
        <div className="col-lg-6 col-6 text-left">
          <form action="" onSubmit={handleSearch}>
            <div className="input-group">
              <Input
                inputType="text"
                value={search}
                name={search}
                placeholder="Search for products"
                onChange={handleChange}
              />
              {/* <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              /> */}
              <div className="input-group-append">
                <span
                  onClick={handleSearch}
                  className="input-group-text bg-transparent text-primary"
                >
                  <FaSearch />
                </span>
              </div>
              {search}
            </div>
          </form>
        </div>
        <div className="col-lg-3 col-6 text-right">
          <a href="#asdf" className="btn border">
            <FaHeart />
            <span className="badge">0</span>
          </a>
          <a href="#asdf" className="btn border">
            <FaShoppingCart />
            <span className="badge">0</span>
          </a>
        </div>
      </div>
    </div>
  );
};
