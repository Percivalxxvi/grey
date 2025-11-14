import React from "react";
import { useNavigate } from "react-router-dom";

const Blogcard = ({ id, image, title, description, author, date, content }) => {
  const navigate = useNavigate();

   const blogs = [
     {
       id: 1,
       image:
         "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
       title: "Building a Clean React UI with TailwindCSS",
       description:
         "Learn how to create stunning and responsive UIs faster using TailwindCSS with React.",
       content:
         "Designing beautiful and responsive user interfaces doesn’t have to be complicated. With Tailwind CSS and React, you can build modern, elegant, and highly responsive web applications — all while writing less code and working more efficiently. Tailwind CSS is a utility-first CSS framework that lets you style elements directly in your markup using simple class names. Instead of writing lengthy custom CSS, you combine pre-defined utility classes to create unique, responsive designs — faster than ever. React’s component-based structure pairs perfectly with Tailwind’s modular styling. Together, they allow you to build reusable UI components with clean and maintainable code. You can focus more on functionality and user experience, and less on repetitive CSS. In today’s fast-paced web development world, speed and design consistency are key. Tailwind CSS helps developers achieve pixel-perfect designs without spending hours tweaking CSS files. When used with React, you get the best of both worlds — powerful interactivity and seamless styling control. Whether you’re building a portfolio site, an e-commerce app, or a dashboard, learning how to use Tailwind CSS with React will dramatically boost your productivity and creativity. Create visually stunning, mobile-friendly, and scalable interfaces — faster and smarter.",
       author: "Joshua Oladeji",
       date: "Oct 22, 2025",
       link: "#",
     },
     {
       id: 2,
       image:
         "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
       title: "Optimizing SEO for Modern Web Apps",
       description:
         "A step-by-step guide on improving SEO rankings for your Vite and React apps.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium...",
       author: "Jane Doe",
       date: "Oct 20, 2025",
       link: "#",
     },
     {
       id: 3,
       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       title: "Mastering Component Reusability in React",
       description:
         "Learn the best patterns to create reusable, maintainable React components.",
       content:
         "One of the greatest strengths of React lies in its component-based architecture, which encourages developers to build user interfaces as a collection of small, reusable pieces. Mastering component reusability not only improves code maintainability but also boosts productivity, scalability, and overall project quality. Component reusability refers to the practice of creating UI elements that can be used multiple times across different parts of an application without rewriting code. A reusable component is flexible, self-contained, and designed to handle varying data or behavior through props, children, and composition.",
       author: "Joshua Oladeji",
       date: "Oct 22, 2025",
       link: "#",
     },
     {
       id: 4,
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
       title: "Integrating APIs with Next.js",
       description:
         "A step-by-step guide on connecting and fetching APIs efficiently in Next.js.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium...",
       author: "Joshua Oladeji",
       date: "Oct 25, 2025",
       link: "#",
     },
     {
       id: 5,
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
       title: "Integrating APIs with Next.js",
       description:
         "A step-by-step guide on connecting and fetching APIs efficiently in Next.js.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium...",
       author: "Joshua Oladeji",
       date: "Oct 25, 2025",
       link: "#",
     },
     {
       id: 6,
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
       title: "Integrating APIs with Next.js",
       description:
         "A step-by-step guide on connecting and fetching APIs efficiently in Next.js.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium...",
       author: "Joshua Oladeji",
       date: "Oct 25, 2025",
       link: "#",
     },
     {
       id: 7,
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
       title: "Integrating APIs with Next.js",
       description:
         "A step-by-step guide on connecting and fetching APIs efficiently in Next.js.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium...",
       author: "Joshua Oladeji",
       date: "Oct 25, 2025",
       link: "#",
     },
   ];


  const handleClick = () => {
    navigate(
      "/blogpage",
      {
        state: {
          id,
          image,
          title,
          description,
          content,
          author,
          date,
        },
      }
    );
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg max-w-sm w-full
      transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:scale-[1.01] border border-gray-800"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-transparent to-transparent opacity-70" />
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-3 line-clamp-3">{description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-700 pt-3">
          <span className="font-medium text-gray-300">{author}</span>
          <span className="text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
