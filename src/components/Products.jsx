import React from "react";
import { useNavigate } from "react-router-dom";

import logo1 from "../assets/brand/logo1.png";
import logo2 from "../assets/brand/logo2.png";

const Products = () => {
  const navigate = useNavigate();

  // DISTRIBUTORS
  const distributors = [
    {
      title: "Amate Audio",
      image: logo1,
      link: "/brands/amate",
      description: "Great sound from Barcelona since 1972",
    },
    {
      title: "Louis Martin",
      image: logo2,
      link: "/brands/louismartin",
      description: "Redefining Audio Excellence with Power, Precision and Passion.",
    },
  ];

  // PARTNERS
  const partners = [
    "Erthpot",
    "Sennheiser",
    "Yamaha",
    "Allen & Heath",
    "Lightware",
    "Extron",
    "Cypress",
    "Lumens",
    "Samsung",
    "Panasonic",
    "Ordain",
    "Logic AV",
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050B18] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADING */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400 text-[11px] md:text-xs mb-3">
            ECO SYSTEM
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            AV <span className="text-blue-500">Partnerships</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            Strategic collaborations with premium audio and AV technology brands.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* LEFT - BRANDS */}
          <div
            className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              overflow-hidden
            "
          >

            {/* HEADER */}
            <div className="flex justify-center items-center px-5 md:px-7 py-5 border-b border-white/10">
  <p className="text-2xl md:text-3xl font-bold text-white text-center">
    National Distributor
  </p>
</div>

            {/* BRAND ITEMS */}
            <div className="p-5 md:p-7 space-y-5">

              {distributors.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(item.link)}
                  className="
                    group
                    flex
                    flex-col sm:flex-row
                    items-center
                    gap-5
                    rounded-2xl
                    border border-white/10
                    bg-[#0B1220]
                    p-5
                    cursor-pointer
                    transition-all duration-300
                    hover:border-blue-500/30
                    hover:bg-[#10192D]
                  "
                >

                  {/* IMAGE */}
                  <div className="w-full sm:w-[120px] h-[120px] bg-white rounded-2xl flex items-center justify-center p-5 shrink-0">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-contain
                        transition-all duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="text-center sm:text-left">

                    <h4 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition">
                      {item.title}
                    </h4>

                    <div className="w-12 h-[2px] bg-blue-500 rounded-full my-3 mx-auto sm:mx-0"></div>

                    {/* DESCRIPTION */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT - PARTNERS */}
          <div
            className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              overflow-hidden
            "
          >

            {/* HEADER */}
            <div className="flex justify-center items-center px-5 md:px-7 py-5 border-b border-white/10">
  <p className="text-2xl md:text-3xl font-bold text-white text-center">
    Technology Solution Partners
  </p>
</div>

            {/* PARTNERS GRID */}
            <div className="p-5 md:p-7">

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {partners.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group
                      rounded-2xl
                      border border-white/10
                      bg-[#0B1220]
                      min-h-[90px]
                      flex items-center justify-center
                      px-4
                      text-center
                      transition-all duration-300
                      hover:border-cyan-500/30
                      hover:bg-[#10192D]
                    "
                  >

                    <h4 className="text-white text-sm md:text-base font-medium leading-snug group-hover:text-cyan-300 transition">
                      {item}
                    </h4>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;