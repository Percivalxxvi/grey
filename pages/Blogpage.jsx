import React from "react";
import Blogcard from "../components/Blogcard";
import { blogs } from "../data/blogs";
import Navpc from "../components/Navpc";

const BlogPage = () => {
  const year = new Date().getFullYear();
  return (
    <section className="relative min-h-screen flex flex-col bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      <header className="bg-gray-800 p-3 shadow-md lg:hidden fixed top-0 w-full z-999 border-b-2 border-grey-0">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* <h1 className="text-2xl font-bold">GreyLine Solutions</h1> */}
          <nav className="space-x-4 text-right w-full">
            <a
              href="/"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors duration-300"
            >
              Home
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
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-200" />

      {/* Navigation */}
      <Navpc page="blogpage" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-500 to-indigo-400 mb-4">
          Our Blogs
        </h1>
        <p className="text-gray-400 max-w-xl text-lg">
          Discover insights, tutorials, and stories from our creative team.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 grid gap-8 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {blogs.map((blog) => (
          <Blogcard key={blog.id} {...blog} />
        ))}
      </div>
      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          &copy; {year} GreyLine Solutions. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default BlogPage;
