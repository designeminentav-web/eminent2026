import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <-- SEO ke liye add kiya
import { blogs } from "../data/blogData.jsx";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>Our Blogs | Eminent Audio Visual - Latest Updates & Insights</title>
        <meta 
          name="description" 
          content="Explore all our latest updates, exhibitions, innovations and professional audio insights at Eminent Audio Visual." 
        />
      </Helmet>

      <section className="min-h-screen bg-[#050B18] py-24 px-4 md:px-6">
        <div 
          className="max-w-7xl mx-auto"
          style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1000px" }} // <-- SPEED OPTIMIZATION (Fast rendering)
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              All <span className="text-blue-500">Blogs</span>
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore all our latest updates, exhibitions, innovations and
              professional audio insights.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="
                  rounded-3xl
                  overflow-hidden
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-blue-500/40
                  transition-all duration-500
                "
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  // SPEED OPTIMIZATION: Pehli 3 images turant load hongi, baaki lazy load hongi
                  loading={index < 3 ? "eager" : "lazy"} 
                  // Pehli image ko sabse highest priority di gayi hai
                  fetchpriority={index === 0 ? "high" : "auto"} 
                  decoding="async" // Scroll smoothly chalega
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <p className="text-blue-400 text-sm mb-3">
                    {blog.date}
                  </p>

                  <h3 className="text-white text-xl font-semibold mb-5">
                    {blog.title}
                  </h3>

                  <button
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                    className="text-blue-400 font-medium"
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;