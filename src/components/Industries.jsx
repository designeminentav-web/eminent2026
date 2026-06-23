import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import govermrnt1 from "../assets/solution/govermrnt1.jpg";
import corporate1 from "../assets/solution/corporate1.jpg";
import house from "../assets/solution/house.jpg";
import home2 from "../assets/solution/home2.jpg";
import school from "../assets/solution/school.jpg";
import event from "../assets/solution/event.JPG";
import {
  FaUniversity,
  FaBuilding,
  FaHotel,
  FaHome,
  FaGraduationCap,
  FaMicrophoneAlt,
} from "react-icons/fa";

const Industries = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const industries = [
    {
      name: "Government",
      icon: FaUniversity,
      image:
        govermrnt1,
      // link: "/government",
    },

    {
      name: "Corporate",
      icon: FaBuilding,
      image:
        corporate1,
      // link: "/corporate",
    },

    {
      name: "Hospitality",
      icon: FaHotel,
      image:
        house,
      // link: "/hospitality",
    },

    {
      name: "Home / Audio Solutions",
      icon: FaHome,
      image:
        home2,
      // link: "/home-hifi",
    },

    {
      name: "Education",
      icon: FaGraduationCap,
      image:
        school,
      // link: "/education",
    },

    {
      name: "Events & Live Shows",
      icon: FaMicrophoneAlt,
      image:
        event,
      // link: "/events-live-shows",
    },
  ];

  useEffect(() => {
    const updateScreenType = () => setIsMobile(window.innerWidth < 768);

    updateScreenType();
    window.addEventListener("resize", updateScreenType);

    return () => window.removeEventListener("resize", updateScreenType);
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
 
    return () => clearInterval(interval);
  }, [industries.length, isMobile]);

  return (
    <section className="w-full overflow-hidden bg-[#050B18]">

      {/* TOP CONTENT */}
      <div
        className="
          relative z-10
          text-center
          px-4 md:px-6
          pt-16 md:pt-10
          pb-6 md:pb-8
        "
      >

        <p className="uppercase tracking-[5px] text-cyan-400 text-[11px] md:text-xs mb-3">
          Industry Solutions
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Solutions Across
          <span className="text-blue-500"> Industries</span>
        </h2>

        <p className="max-w-4xl mx-auto text-gray-400 mt-5 text-sm md:text-lg leading-relaxed">
          Transforming spaces into immersive environments with top tier
          audiovisual innovation. From corporate settings to cultural venues,
          educational spaces to entertainment hubs, Eminent Audio Visual sets
          the standard for sound and visual excellence.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mt-6"></div>

      </div>

      {/* SLIDER */}
      <div
        className="
          relative
          flex
          transition-transform
          duration-700
          ease-in-out
          -mt-2 md:-mt-4
        "
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >

        {industries.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              onClick={() => navigate(item.link)}
              className="
                relative
                min-w-full
                h-[62vh]
                sm:h-[68vh]
                md:h-[90vh]
                flex items-center justify-center
                cursor-pointer
                group
                px-3 sm:px-5
              "
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  group-hover:scale-105
                  transition duration-700
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* CONTENT */}
              <div className="relative text-center text-white px-4 sm:px-6 z-10 w-full max-w-xl">

                {/* ICON */}
                <div
                  className="
                    w-14 h-14 md:w-16 md:h-16
                    mx-auto mb-5
                    flex items-center justify-center
                    rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    border border-white/10
                  "
                >
                  <Icon className="text-2xl md:text-3xl" />
                </div>

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                  {item.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-[15px] md:text-lg leading-6 sm:leading-7 md:leading-8 px-1 sm:px-0">
                  Delivering premium AV solutions for{" "}
                  {item.name.toLowerCase()} industry with
                  powerful sound and modern technology.
                </p>

                {/* BUTTON */}
                {/* <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.link);
                  }}
                  className="
                    mt-6 sm:mt-7
                    px-5 sm:px-6 md:px-8
                    py-3 md:py-4
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                    font-semibold
                    text-sm md:text-base
                    shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                  "
                >
                  Explore More
                </button> */}

              </div>

            </div>
          );
        })}

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 py-5 bg-[#050B18]">

        {industries.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              transition-all duration-300 rounded-full
              ${
                index === i
                  ? "w-10 h-3 bg-blue-500"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }
            `}
          ></button>
        ))}

      </div>

    </section>
  );
};

export default Industries;