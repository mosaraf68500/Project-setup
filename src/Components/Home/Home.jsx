import React from "react";
import image from "../../assets/Business_SVG.svg";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <section className="bg-gray-900 text-white" id="home">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Start Your{" "}
            <span className="text-purple-500 dark:text-purple-400">
              React Project
            </span>{" "}
            the Smart Way
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300">
            One place for all setup tools — React Router, Tailwind, DaisyUI, Firebase & more.
            <br className="hidden md:inline lg:hidden" />
            No more scattered docs. Just click & go!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <NavLink
              to="/tools"
              className="px-8 py-3 text-lg font-semibold rounded bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              Get Started
            </NavLink>
            <NavLink
              to="/docs"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-300 text-gray-100 hover:border-purple-400"
            >
              How It Works
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={image}
            alt="React Project Setup Illustration"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
