import React, { useState, useEffect } from "react";
import Navpc from "../components/Navpc";
import ProjectCard from "../components/ProjectCard";
import Totop from "../components/Totop";

const Appage = () => {
  const colors = ["blue", "violet", "yellow"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 1000); // change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navpc />
      {/* <Pager/> */}

      <header className="bg-gray-800 p-3 shadow-md lg:hidden fixed top-0 w-full z-999 border-b-2 border-gray-0">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* <h1 className="text-2xl font-bold">GreyLine Solutions</h1> */}
          <nav className="space-x-4">
            <a
              href="#about"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="/blogs"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors duration-300"
            >
              Blog
            </a>
          </nav>
        </div>
      </header>
      <div className="h-10 lg:hidden flex"></div>

      {/* Hero */}
      <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between lg:justify-evenly w-full min-h-[90vh] overflow-hidden bg-linear-to-t from-black via-gray-950 to-gray-900 px-6 py-12">
        {/* Deep glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,28,135,0.25),transparent_80%)]" />

        {/* Image Section */}
        <div className="relative z-10 flex justify-center items-center lg:w-[45%] w-full h-[350px] lg:h-[500px] transition-transform duration-700">
          <img
            src="https://ik.imagekit.io/percival26/edited%20photo2.1.2.PNG?updatedAt=1762963287116"
            alt="GreyLine Solutions"
            className="w-full h-full object-cover rounded-xl shadow-lg shadow-indigo-800/40"
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 flex flex-col text-center lg:text-left lg:w-[45%] mt-10 lg:mt-0 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
            Welcome to <br /> GreyLine Solutions
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
            Empowering brands through technology, design, and digital
            craftsmanship. We build solutions that redefine excellence.
          </p>

          <a
            href="#contact"
            className="inline-block mt-4 w-fit mx-auto lg:mx-0 px-6 py-3 text-lg font-semibold text-white bg-linear-to-r from-indigo-700 to-purple-800 rounded-xl shadow-md hover:shadow-indigo-600/40 hover:scale-105 transition-all duration-300 border border-gray-700"
          >
            Get in Touch
          </a>
        </div>

        {/* Dark floating glow accents */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-900/20 rounded-full blur-3xl animate-pulse delay-200" />
      </div>

      {/* Intro */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 bg-linear-to-b from-black via-gray-950 to-gray-900 overflow-hidden">
        {/* Deep Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),transparent_70%)]" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 w-full max-w-2xl leading-tight bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]">
            Hello, I'm Joshua Oladeji 👋
          </h2>

          <p className="text-lg lg:text-xl text-gray-400 mb-1 tracking-wide">
            Front-End Developer
          </p>
          <p className="text-lg lg:text-xl text-gray-400 mb-6 tracking-wide">
            Open Source Enthusiast
          </p>

          <a
            href="#projects"
            className="relative inline-block px-8 py-3 text-lg font-semibold text-white bg-linear-to-r from-indigo-700 to-purple-800 rounded-xl shadow-md border border-gray-700 hover:shadow-indigo-600/40 hover:scale-105 transform transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Floating soft accents */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-900/20 rounded-full blur-3xl animate-pulse delay-200" />
      </section>

      {/* About */}
      <section
        id="about"
        className="relative flex flex-col items-center justify-center text-center lg:text-left mx-auto px-6 py-24 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden shadow-lg"
      >
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.15),transparent_70%)]" />

        {/* Text content */}
        <div className="relative z-10 w-full lg:w-4/5 space-y-6">
          <h3 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-green-400">
            About Me
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl italic">
            I'm a passionate{" "}
            <span
              style={{ color: colors[index] }}
              className="text-indigo-400 font-medium"
            >
              Front-End Developer
            </span>{" "}
            who loves building clean, responsive, and scalable web applications.
            I focus on creating smooth user experiences through elegant code and
            thoughtful design.
          </p>
        </div>

        {/* Subtle floating shapes for depth */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-800/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-800/10 rounded-full blur-3xl animate-pulse delay-200" />
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-4 lg:py-16 py-10">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4 text-gray-200">
          {[
            "JavaScript",
            "React",
            "Next JS",
            "Tailwind CSS",
            "MongoDB",
            "Github",
            "Python",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-700 px-3 py-2 rounded border-2 border-gray-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-900 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold lg:mb-10 mb-5">Projects</h3>
          <div className="grid md:grid-cols-2 lg:gap-8 gap-4">
            <ProjectCard
              title="Ecommerce Website"
              description="A full-featured e-commerce website built with React, Tailwind CSS and Zustand."
              link="https://kwikshopper.vercel.app/"
            />
            <ProjectCard
              title="School Website"
              description="A full-featured school website built with React and Tailwind CSS."
              link="https://heroespinnacleschools.org/"
            />
            <ProjectCard
              title="Recipe Website"
              description="A full-featured recipe website built with React."
              link="https://mealrecipes.vercel.app/"
            />
            <ProjectCard
              title="Game Themed Website"
              description="A multi-featured game themed website built with React."
              link="https://gameweb1.vercel.app/"
            />
            <ProjectCard
              title="Hair Styling Business Website"
              description="A multi-featured hair themed business website built with React and Tailwind CSS."
              link="https://barberweb1.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-linear-to-b from-[#1e293b] via-[#111827] to-black text-white py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-green-400">
            Get in Touch
          </h3>

          <p className="text-gray-300 mb-10 text-lg">
            Want to collaborate, ask a question, or just say hello? Let’s
            connect!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Email Button */}
            <a
              href="mailto:ayodejioladeji12@gmail.com"
              className="group relative overflow-hidden rounded-lg bg-gray-700 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10 group-hover:text-white">
                📧 Email Me
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Twitter/X Button */}
            <a
              href="https://x.com/thegreyline12"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-gray-700 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10 group-hover:text-white">
                🐦 Twitter / X
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      {/* <section
        id="blog"
        className="flex flex-col items-center justify-center h-fit pt-2 pb-2 bg-linear-to-b from-gray-800 to-purple-500 lg:border-t-0"
      >
        <div className="text-3xl font-bold mb-2">BLOGS</div>
        <div className="flex flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:gap-4 gap-1 w-4/4 items-center justify-center pt-2 pb-2">
          {blogs.map((blog, index) => (
            <Blogcard key={index} {...blog} />
          ))}
        </div>
      </section> */}
      <Totop />
      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          &copy; 2025 GreyLine Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Appage;
