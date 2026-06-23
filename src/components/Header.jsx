import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import class1 from "../assets/solution/class1.jpg";
import logo1 from "../assets/brand/logo1.png";
import logo2 from "../assets/brand/logo2.png";
import auditoriums1 from "../assets/solution/auditoriums1.jpg";
import event from "../assets/solution/event.jpg";
import Night1 from "../assets/solution/Night1.jpg";
import Restaurants from "../assets/solution/Restaurants.jpg";
import Gym from "../assets/solution/Gym.jpg";
import Conference1 from "../assets/solution/Conference1.jpg";
import retailoutlet from "../assets/solution/retailoutlet.jpg";

import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

import Logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // desktop dropdown
  const [openDesktopBrands, setOpenDesktopBrands] = useState(false);
  const [openDesktopSolutions, setOpenDesktopSolutions] = useState(false);

  // mobile dropdown
  const [openBrands, setOpenBrands] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDesktopBrands(false);
        setOpenDesktopSolutions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ================= NAVIGATION =================
  const handleNavigation = (path) => {
    navigate(path);

    // close all dropdowns
    setIsMenuOpen(false);
    setOpenBrands(false);
    setOpenSolutions(false);
    setOpenDesktopBrands(false);
    setOpenDesktopSolutions(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ================= BRANDS =================
  const brands = [
    {
      name: "Amate Audio",
      link: "/brands/amate",
      image: logo1,
    },
    {
      name: "Louis Martin",
      link: "/brands/louismartin",
      image: logo2,
    },
  ];

  // ================= SOLUTIONS =================
  const solutions = [
    {
      name: "Auditoriums",
      path: "/solutions/auditoriums",
      image: auditoriums1,
    },
    {
      name: "Live Events",
      path: "/solutions/live-events",
      image: event,
    },
    {
      name: "Night Clubs",
      path: "/solutions/night-clubs",
      image: Night1,
    },
    {
      name: "Restaurants & Cafes",
      path: "/solutions/restaurants-cafes",
      image: Restaurants,
    },
    {
      name: "Gym Fitness",
      path: "/solutions/gym-fitness",
      image: Gym,
    },
    {
      name: "Conference Rooms",
      path: "/solutions/conference-room",
      image: Conference1,
    },
    {
      name: "Retail Outlet",
      path: "/solutions/retail-outlet",
      image: retailoutlet,
    },
    {
      name: "Smart Classroom",
      path: "/solutions/smart-classroom",
      image: class1,
    },
  ];

  return (
    <>
      {/* Spacer Taki Niche Ka Content Header Ke Piche Na Chhupe */}
      <div className="h-[85px] w-full hidden md:block"></div>
      <div className="h-[51px] w-full md:hidden"></div>

      <header
        className="
          fixed top-0 left-0 w-full z-[999]
          bg-white
          border-b border-blue-100
          shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        "
      >
        {/* TOP LINE */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-black"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[82px]">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="flex items-center"
            >
              <img
                src={Logo}
                alt="Eminent Audio Visual Logo"
                loading="eager" // <-- SPEED OPTIMIZATION
                fetchpriority="high"
                className="
                  h-12 md:h-14 w-auto object-contain
                  transition duration-300 hover:scale-105
                "
              />
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-6">

              {/* ABOUT */}
              <button
                onClick={() => handleNavigation("/about")}
                className="
                  text-[13px] font-semibold text-gray-700
                  hover:text-blue-600 transition duration-300
                "
              >
                ABOUT US
              </button>

              {/* ================= BRANDS ================= */}
              <div
                className="relative py-4"
                onMouseEnter={() => {
                  setOpenDesktopBrands(true);
                  setOpenDesktopSolutions(false);
                }}
                onMouseLeave={() => setOpenDesktopBrands(false)}
              >

                <button
                  onClick={() => {
                    setOpenDesktopBrands(!openDesktopBrands);
                    setOpenDesktopSolutions(false);
                  }}
                  className="
                    flex items-center gap-2
                    text-[13px] font-semibold text-gray-700
                    hover:text-blue-600 transition duration-300
                  "
                >
                  BRANDS

                  <FaChevronDown
                    className={`text-[10px] transition duration-300 ${
                      openDesktopBrands ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDesktopBrands && (
                  <div
                    className="
                      absolute top-full left-1/2 -translate-x-1/2
                      mt-1 w-[400px] lg:w-[460px]
                      rounded-3xl
                      bg-gradient-to-br from-[#07152D] via-[#0B1F40] to-black
                      border border-blue-500/20
                      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                      backdrop-blur-xl
                      p-6 z-50
                    "
                  >
                    <div className="grid grid-cols-2 gap-5">

                      {brands.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleNavigation(item.link)}
                          className="
                            bg-white/5
                            border border-white/10
                            rounded-3xl
                            overflow-hidden
                            hover:border-blue-400/40
                            hover:-translate-y-1
                            transition-all duration-300
                            group
                          "
                        >

                          {/* LOGO BOX */}
                          <div
                            className="
                              bg-white
                              h-[100px]
                              flex items-center justify-center
                              p-1
                            "
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              decoding="async"
                              className="
                                w-full
                                h-full
                                object-contain
                                transition-all duration-300
                                group-hover:scale-105
                              "
                            />
                          </div>

                          {/* BRAND NAME */}
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-white text-center">
                              {item.name}
                            </h3>
                          </div>

                        </button>
                      ))}

                    </div>
                  </div>
                )}
              </div>

              {/* ================= SOLUTIONS ================= */}
              <div
                className="relative py-4"
                onMouseEnter={() => {
                  setOpenDesktopSolutions(true);
                  setOpenDesktopBrands(false);
                }}
                onMouseLeave={() => setOpenDesktopSolutions(false)}
              >

                <button
                  onClick={() => {
                    setOpenDesktopSolutions(!openDesktopSolutions);
                    setOpenDesktopBrands(false);
                  }}
                  className="
                    flex items-center gap-2
                    text-[13px] font-semibold text-gray-700
                    hover:text-blue-600 transition duration-300
                  "
                >
                  SOLUTIONS

                  <FaChevronDown
                    className={`text-[10px] transition duration-300 ${
                      openDesktopSolutions ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDesktopSolutions && (
                  <div
                    className="
                      absolute top-full right-[-40px] lg:right-[-60px] xl:right-[-100px]
                      mt-1 w-[700px] lg:w-[880px] max-w-[95vw]
                      rounded-3xl
                      bg-gradient-to-br from-[#07152D] via-[#0B1F40] to-black
                      border border-blue-500/20
                      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                      backdrop-blur-xl
                      p-5 z-50
                    "
                  >
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">

                      {solutions.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleNavigation(item.path)}
                          className="
                            bg-white/5
                            border border-white/10
                            rounded-2xl overflow-hidden
                            hover:border-blue-400/40
                            hover:-translate-y-1
                            transition-all duration-300
                          "
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            className="h-20 w-full object-cover"
                          />

                          <div className="p-3">
                            <h3 className="text-[11px] font-semibold text-white">
                              {item.name}
                            </h3>
                          </div>
                        </button>
                      ))}

                    </div>
                  </div>
                )}
              </div>

              {/* CASE STUDY */}
              <button
                onClick={() => handleNavigation("/casestudy")}
                className="
                  text-[13px] font-semibold text-gray-700
                  hover:text-blue-600 transition duration-300
                "
              >
                CASE STUDY
              </button>

              {/* DESIGN REQUEST */}
              <button
                onClick={() => handleNavigation("/design-request")}
                className="
                  relative
                  text-[13px] font-semibold
                  text-blue-700
                  hover:text-blue-900 transition duration-300
                  px-3 py-2 rounded-full
                  bg-gradient-to-r from-blue-50 to-cyan-50
                  border border-blue-200
                  shadow-[0_8px_20px_rgba(37,99,235,0.10)]
                "
              >
                DESIGN REQUEST
                <span className="absolute -bottom-1 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9]" />
              </button>

            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                lg:hidden
                w-10 h-10 rounded-xl
                bg-blue-50 text-blue-600
                flex items-center justify-center
              "
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${isMenuOpen ? "max-h-[2500px]" : "max-h-0"}
          `}
        >
          <div className="bg-gradient-to-br from-[#07152D] via-[#0B1F40] to-black border-t border-blue-500/20 px-5 py-5">

            <div className="flex flex-col gap-2">

              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "CASE STUDY", path: "/casestudy" },
                { name: "DESIGN REQUEST", path: "/design-request" },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleNavigation(item.path)}
                  className="
                    text-left px-4 py-3 rounded-xl 
                    text-white font-medium
                    hover:bg-white/10
                    transition duration-300
                  "
                >
                  {item.name}
                </button>
              ))}

              {/* MOBILE BRANDS */}
              <div className="mt-3">

                <button
                  onClick={() => setOpenBrands(!openBrands)}
                  className="
                    w-full flex items-center justify-between
                    px-4 py-3
                    bg-white/10
                    border border-white/10
                    rounded-2xl
                    font-semibold text-white
                  "
                >
                  BRANDS
                  <FaChevronDown />
                </button>

                {openBrands && (
                  <div className="grid grid-cols-2 gap-3 mt-3">

                    {brands.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleNavigation(item.link)}
                        className="
                          bg-white/5
                          border border-white/10
                          rounded-2xl
                          overflow-hidden
                        "
                      >

                        <div className="bg-white h-[120px] p-4 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            className="
                              w-full
                              h-full
                              object-contain
                            "
                          />
                        </div>

                        <div className="p-3 text-xs font-semibold text-white text-center">
                          {item.name}
                        </div>

                      </button>
                    ))}

                  </div>
                )}
              </div>

              {/* MOBILE SOLUTIONS */}
              <div className="mt-4">

                <button
                  onClick={() => setOpenSolutions(!openSolutions)}
                  className="
                    w-full flex items-center justify-between
                    px-4 py-3
                    bg-white/10
                    border border-white/10
                    rounded-2xl
                    font-semibold text-white
                  "
                >
                  SOLUTIONS
                  <FaChevronDown />
                </button>

                {openSolutions && (
                  <div className="grid grid-cols-2 gap-3 mt-3">

                    {solutions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleNavigation(item.path)}
                        className="
                          bg-white/5
                          border border-white/10
                          rounded-2xl overflow-hidden
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          className="h-20 w-full object-cover"
                        />

                        <div className="p-2 text-[11px] font-semibold text-white">
                          {item.name}
                        </div>
                      </button>
                    ))}

                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;