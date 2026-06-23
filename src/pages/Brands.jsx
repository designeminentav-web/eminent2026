import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <-- SEO ke liye import kiya

const brands = [
  {
    id: "amate",
    name: "Amate",
    path: "/brands/amate",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    id: "louismartin",
    name: "Louis Martin",
    path: "/brands/louismartin",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const Brands = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>Our Brands | Eminent Audio Visual</title>
        <meta 
          name="description" 
          content="Explore our trusted partners and industry-leading professional audio brands, including Amate Audio and Louis Martin. We deliver world-class sound solutions." 
        />
        <meta 
          name="keywords" 
          content="Amate Audio, Louis Martin, Professional Audio Brands, Eminent Audio Visual, Sound Systems" 
        />
      </Helmet>

      <div 
        className="min-h-screen bg-gray-100"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }} // <-- SPEED OPTIMIZATION
      >
        {/* 🔥 Hero Section */}
        <div className="bg-black text-white py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Brands</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We collaborate with industry-leading brands to deliver world-class
            audio solutions.
          </p>
        </div>

        {/* 🔥 Brands Grid */}
        <div className="py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <Link
                to={brand.path}
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Image */}
                <img
                  src={brand.img}
                  alt={`${brand.name} Audio Systems`}
                  // SPEED OPTIMIZATION: Pehli image turant load hogi, baaki smart load hongi
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

                {/* Glass Content */}
                <div className="absolute bottom-0 w-full p-6 backdrop-blur-md bg-white/10">
                  <h2 className="text-2xl font-semibold text-white">
                    {brand.name}
                  </h2>
                  <p className="text-sm text-gray-200 mt-1">
                    Explore products and solutions
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-3xl transition duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;