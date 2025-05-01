import React from "react";
import { NavLink } from "react-router";

const Tools = () => {
    const FancyButton = ({ text, to }) => (
        <NavLink
          to={to}
          className="relative flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative text-center text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            {text}
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </NavLink>
      );
      

  return (
   <div className="bg-[#111827] py-4">
     <div className="w-2/3  my-12 gap-6 mx-auto grid grid-cols-5 justify-center items-center">
      <FancyButton text="React" to="/" />
      <FancyButton text="React Router" to="/about" />
      <FancyButton text="Tailwind CSS" to="/contact" />
      <FancyButton text="DaisyUI" to="/" />
      <FancyButton text="MambaUI" to="/about" />
      <FancyButton text="Button" to="/contact" />

      <FancyButton text="Navbar" to="/" />
      <FancyButton text="Footer" to="/about" />
      <FancyButton text="Toast" to="/contact" />
      <FancyButton text="React Icon" to="/" />
      <FancyButton text="Google Font" to="/about" />
      <FancyButton text="FontAswesome" to="/contact" />

      <FancyButton text="Firebase" to="/" />
      <FancyButton text="MongoDB" to="/about" />
      <FancyButton text="NodeJS" to="/contact" />

      <FancyButton text="Express js" to="/" />
      <FancyButton text="TypeScript" to="/about" />
      <FancyButton text="Contact" to="/contact" />

      <FancyButton text="Home" to="/" />
      <FancyButton text="About Us" to="/about" />
      
    </div>
   </div>
  );
};

export default Tools;
