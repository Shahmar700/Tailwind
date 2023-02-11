import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-mycolors-dark">
      <div
        className="flex justify-between w-11/12
    mx-auto pr-4 pt-4 pb-4 items-center text-white"
      >
        <div className="text-3xl font-bold">Logo</div>
        <ul className="flex text-lg">
          <li className="mr-6">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="/addproduct">Add Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
