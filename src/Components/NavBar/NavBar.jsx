import React from "react";
import { NavLink } from "react-router";
import image from "../../assets/icon.png";
import "../../App.css";

export default function NavBar() {
  const Links = (
    <>
      <li>
        <NavLink className="font-semibold" to="/">
          Home
        </NavLink>{" "}
      </li>
      <li>
        <NavLink className="font-semibold" to="/tools">
          Tools
        </NavLink>{" "}
      </li>
      <li>
        <NavLink className="font-semibold" to="/docs">
          Docs
        </NavLink>{" "}
      </li>

      <li>
        <NavLink className="font-semibold" to="/github">
          GitHub
        </NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="w-full navbar bg-gray-100 px-4">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <div className="flex gap-1.5 justify-center items-center">
          <img className="w-[30px]" src={image} alt="" />
          <NavLink to="/" className=" text-lg font-semibold">
            {" "}
            <span
              className="text-2xl text-[#189ab4]"
            >
              P.
            </span>
            Setup{" "}
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <NavLink to="/login" className="btn">
          SignIn
        </NavLink>
        <NavLink to="/registetion" className="btn">
          SignUp
        </NavLink>
      </div>
    </div>
  );
}
