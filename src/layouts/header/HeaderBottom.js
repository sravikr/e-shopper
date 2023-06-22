import React from "react";
import { NavLink } from "react-router-dom";
export const HeaderBottom = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        {/* <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: 410 }}
            >
              <div className="nav-item dropdown">
                <a href="#asdf" className="nav-link" data-toggle="dropdown">
                  Dresses <i className="fa fa-angle-down float-right mt-1" />
                </a>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <a href="#asdf" className="dropdown-item">
                    Men's Dresses
                  </a>
                  <a href="#asdf" className="dropdown-item">
                    Women's Dresses
                  </a>
                  <a href="#asdf" className="dropdown-item">
                    Baby's Dresses
                  </a>
                </div>
              </div>
              <a href="#asdf" className="nav-item nav-link">
                Shirts
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Jeans
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Swimwear
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Sleepwear
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Jumpsuits
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Blazers
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Jackets
              </a>
              <a href="#asdf" className="nav-item nav-link">
                Shoes
              </a>
            </div>
          </nav>
        </div> */}
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="#asdf" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/products" className="nav-item nav-link">
                  Shop
                </NavLink>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/login" className="nav-item nav-link">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-item nav-link">
                  Register
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
