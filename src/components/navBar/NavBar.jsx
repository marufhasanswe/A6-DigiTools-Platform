import React from "react";
import shoopingCart from "../../assets/products/shopping-cart.png";
const NavBar = ({ cart }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#9514fa]">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-">
        <button className="relative">
          {cart.length > 0 && (
            <span className="text-xs bg-red-500 text-white w-4 h-4 inline-block rounded-full font-semibold absolute -top-3 -right-2">
              {cart.length}
            </span>
          )}
          <img src={shoopingCart} alt="" />
        </button>
        <button className="btn btn-ghost">Login</button>
        <a className="btn  rounded-full primary-bg text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
