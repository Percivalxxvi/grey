import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const BlogDetails = () => {
  const location = useLocation();
  const year = new Date().getFullYear();
  const blog = location.state; // blog data from Link

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-200">
        <h1 className="text-2xl font-bold mb-4">Blog not found 😕</h1>
        <Link
          to="/"
          className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 right-16 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-200" />

      {/* Header Navigation */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-gray-900/60 border-b border-gray-800">
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </Link>
        <h1 className="text-lg font-semibold text-gray-200 tracking-wide">
          Blog Post
        </h1>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/70 to-transparent" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-indigo-400">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-800">
        <p className="text-gray-400 italic mb-6 text-center">
          {blog.description}
        </p>

        <p className="text-gray-300 leading-relaxed text-justify whitespace-pre-line">
          {blog.content}
        </p>

        <div className="mt-10 pt-6 border-t border-gray-700 flex justify-between items-center text-sm text-gray-400">
          <span className="font-medium text-purple-400">{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          &copy; {year} AOD Interactive. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default BlogDetails;
