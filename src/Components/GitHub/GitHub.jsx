import React from "react";
import img from "../../assets/converted.jpg";
import { FaGithub } from "react-icons/fa";

const GitHub = () => {
  return (
    <section className="bg-base-200 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Heading & Bio */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary mb-3">
            Explore on GitHub
          </h2>
          <p className="text-base-content mb-4">
            I’m Md. Mosaraf Hossen, a passionate web developer focused on
            building modern and responsive web applications. Explore my GitHub
            to see daily commits, featured projects, and the technologies I work
            with.
          </p>
          <a
            href="https://github.com/mosaraf68500"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            <FaGithub size={20} /> Visit GitHub
          </a>
        </div>

        {/* Right Side: Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <img
            src={img}
            alt="Md. Mosaraf Hossen"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* GitHub Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <img
          src="https://github-readme-stats.vercel.app/api?username=mosaraf68500&show_icons=true&theme=react"
          alt="GitHub Stats"
          className="rounded shadow-md"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=mosaraf68500&theme=react"
          alt="GitHub Streak"
          className="rounded shadow-md"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=mosaraf68500&layout=compact&theme=react"
          alt="Top Languages"
          className="rounded shadow-md"
        />
      </div>

      {/* Repositories Section */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold text-primary mb-3">
          Featured Repositories
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/mosaraf68500/medi-home"
            target="_blank"
            className="link link-primary"
          >
            Medi Home
          </a>
          <a
            href="https://github.com/mosaraf68500/peddy"
            target="_blank"
            className="link link-primary"
          >
            Peddy
          </a>
          <a
            href="https://github.com/mosaraf68500/lawyer-booking"
            target="_blank"
            className="link link-primary"
          >
            Lawyer Booking
          </a>
          {/* Add more repo links as needed */}
        </div>
      </div>
    </section>
  );
};

export default GitHub;
