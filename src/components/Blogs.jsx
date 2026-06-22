import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogData.jsx";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-[#050B18] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-13 md:mb-9">

          <p className="uppercase tracking-[4px] md:tracking-[5px] text-blue-400 text-xs md:text-sm mb-4">
            Insights & Updates
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
              text-white
              mb-5
              leading-tight
            "
          >
            Latest <span className="text-blue-500">News</span>
          </h1>

          <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              text-sm
              md:text-lg
              leading-7
              md:leading-8
              px-2
            "
          >
            Stay updated with the latest trends, innovations, and professional
            audio insights from Eminent Audio Visual.
          </p>

        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                shadow-[0_0_30px_rgba(0,0,0,0.25)]
                hover:border-blue-500/40
                transition-all
                duration-500
                flex
                flex-col
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-56
                    sm:h-64
                    md:h-72
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

              {/* Content */}
              <div className="p-5 md:p-7 flex flex-col flex-grow">

                <p className="text-blue-300 text-sm mb-3 tracking-wide">
                  {blog.date}
                </p>

                <h3
                  className="
                    text-white
                    text-lg
                    md:text-xl
                    font-semibold
                    leading-7
                    mb-5
                    flex-grow
                  "
                >
                  {blog.title}
                </h3>

                {/* READ MORE BUTTON */}
                <button
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  className="
                    text-sm
                    font-medium
                    text-blue-400
                    flex
                    items-center
                    gap-2
                    group-hover:gap-4
                    transition-all
                    duration-300
                  "
                >
                  Read More
                  <span>→</span>
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* VIEW ALL BLOGS BUTTON */}
        <div className="text-center mt-14 md:mt-16">

          <button
            onClick={() => navigate("/blogs")}
            className="
              px-8
              md:px-10
              py-3
              md:py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              text-white
              text-sm
              md:text-base
              font-semibold
              tracking-wide
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View All Blogs →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Blogs;