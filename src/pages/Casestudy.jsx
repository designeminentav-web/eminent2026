import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async"; 
///imgae all //
import louismartin from "../assets/brand/louismartin.png";
import paschimvihar from "../assets/casestudy/paschimvihar.jpg";
import barlin from "../assets/casestudy/barlin.jpeg";
import dotdelhi from "../assets/casestudy/dotdelhi.jpeg";
import iitkanpuir from "../assets/casestudy/iitkanpuir.png";
import shaimandir from "../assets/casestudy/shaimandir.png";
import x  from "../assets/casestudy/x.jpeg";
import romlane from "../assets/casestudy/romlane.jpeg";
import anylogo from "../assets/casestudy/anylogo.png";
import kksport from "../assets/casestudy/kksport.png";
import kris from "../assets/casestudy/kris.jpg";
import iitmandi from "../assets/casestudy/iitmandi.jpg";
import max from "../assets/casestudy/max.jpg";
import nannital from "../assets/casestudy/nannital.png";
import studebar from "../assets/casestudy/studebar.jpg";
import nasik from "../assets/casestudy/nasik.jpeg";
import aviraj from "../assets/casestudy/aviraj.jpeg";
import she from "../assets/casestudy/she.jpg";
import gold from "../assets/casestudy/gold.jpg";
import mumbai2 from "../assets/casestudy/mumbai2.jpeg";
import man3 from "../assets/casestudy/man3.jpg";
import dps2 from "../assets/casestudy/dps2.png";
import mocha from "../assets/casestudy/mocha.png";
import kibo2 from "../assets/casestudy/kibo2.jpg";
import khalsha from "../assets/casestudy/khalsha.jpg";
import noida2 from "../assets/casestudy/noida2.jpg";
import one8 from "../assets/casestudy/one8.png";
import oral from "../assets/casestudy/oral.png";
import dragon2 from "../assets/casestudy/dragon2.png";

import demopune2 from "../assets/new/demopune2.JPG";

import pss from "../assets/casestudy/pss.jpg";

import btc from "../assets/casestudy/btc.png";

import assound from "../assets/casestudy/assound.png";

import balancebox from "../assets/casestudy/balancebox.png";

import {
  FaBroadcastTower,
  FaHotel,
  FaBuilding,
  FaGraduationCap,
  FaPlaceOfWorship,
  FaLandmark,
  FaDumbbell,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const CaseStudy = () => {
  const [active, setActive] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Ek page par kitne cards dikhane hain
  const itemsPerPage = 6;

  const getImg = (keyword) =>
    `https://images.unsplash.com/photo-${keyword}?auto=format&fit=crop&w=900&q=80`;

  // Categories Filter Tabs
  const categories = [
    { id: "all", label: "All", icon: <FaBroadcastTower /> },
    { id: "gov", label: "Government", icon: <FaLandmark /> },
    { id: "worship", label: "Worship", icon: <FaPlaceOfWorship /> },
    { id: "hospitality", label: "Hospitality", icon: <FaHotel /> },
    { id: "gym", label: "GYM & Sports", icon: <FaDumbbell /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "corporate", label: "Corporate", icon: <FaBuilding /> },
    { id: "event", label: "Events", icon: <FaBroadcastTower /> },
  ];

  // Helper function to get category label based on its ID
  const getCategoryLabel = (catId) => {
    const found = categories.find((cat) => cat.id === catId);
    return found ? found.label : "Project";
  };

  // ✅ SAHI CATEGORY KE SATH DATA UPDATE KIYA GAYA HAI
  const caseStudies = [
    {
      id: "gym-paschim-vihar",
      category: "gym",
      title: "MULTI-ZONE GYM AUDIO INSTALLATION IN PASCHIM VIHAR",
      desc: "Professional audio system deployment at a large-format fitness centre featuring Amate Audio and Louis Martin.",
      img: [paschimvihar], 
    },
    {
      id: "hospitality-berlin-haus",
      category: "hospitality",
      title: "PREMIUM AUDIO INSTALLATION AT BERLIN HAUS DE GOURMET",
      desc: "Bespoke Amate Audio system designed for elegance and performance across indoor dining and outdoor terrace zones.",
      img: [barlin],
    },
    {
      id: "hospitality-dot-delhi",
      category: "hospitality",
      title: "PREMIUM AUDIO INSTALLATION AT DOT, DELHI",
      desc: "High-performance Louis Martin audio setup delivering crystal-clear mid-highs and powerful bass for a dynamic lounge experience.",
      img: [dotdelhi],
    },
    {
      id: "gym-24hours-paschim",
      category: "gym",
      title: "24 HOURS FITNESS CENTRE, ASHOK VIHAR",
      desc: "Robust around-the-clock audio reinforcement supporting high-energy workouts and instructor-led group sessions.",
      img: [paschimvihar],
    },
    {
      id: "education-iit-kanpur",
      category: "education", // Changed from 'gov'
      title: "PROFESSIONAL AUDIO INSTALLATION AT IIT KANPUR",
      desc: "Pristine vocal clarity and dynamic sound reinforcement engineered for a premier educational institution's academic space.",
      img: [iitkanpuir],
    },
    {
      id: "worship-saibaba-mandir",
      category: "worship",
      title: "AUDIO REINFORCEMENT AT SHREE SAI BABA MANDIR",
      desc: "Warm, clear, and evenly distributed acoustic setup ensuring a peaceful and immersive spiritual environment for devotees.",
      img: [shaimandir],
    },
    {
      id: "gym-sk-fitness",
      category: "gym",
      title: "HIGH-ENERGY AUDIO DEPLOYMENT AT SK FITNESS, DELHI",
      desc: "Massive, high-SPL audio system with heavy dual 18-inch subwoofers to drive intense, electrifying workout sessions.",
      img: getImg("weightlifting"),
    },
    {
      id: "education-100x-school",
      category: "education",
      title: "PROFESSIONAL AUDIO INSTALLATION AT 100X SCHOOL",
      desc: "Massive, high-SPL audio system with heavy dual 18-inch subwoofers to drive intense, electrifying workout sessions.",
      img:[x],
    },
    {
      id: "hospitality-romeo-lane-raipur",
      category: "hospitality",
      title: "PREMIUM MULTI-ZONE AUDIO INSTALLATION AT ROMEO LANE, RAIPUR",
      desc: "Massive, high-SPL audio system with heavy dual 18-inch subwoofers to drive intense, electrifying workout sessions.",
      img: [romlane],
    },
    {
      id: "gym-anytime-fitness",
      category: "gym",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT ANYTIME FITNESS",
      desc: "Massive, high-SPL audio system with heavy dual 18-inch subwoofers to drive intense, electrifying workout sessions.",
      img: [anylogo],
    },
    {
      id: "kho-kho-sports-promotion-trust",
      category: "gym", // Changed from 'gov' to 'gym' (Sports)
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT KHO KHO AND SPORTS PROMOTION TRUST, DELHI",
      desc: "A robust and dynamic professional audio setup tailored to deliver exceptional clarity and coverage for sporting events.",
      img: [kksport],
    },
    {
      id: "gym-kris-gethin-gurugram",
      category: "gym",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT KRIS GETHIN GYM, GURUGRAM",
      desc: "A massive, high-performance professional audio system designed to deliver an electrifying and immersive fitness environment.",
      img: [kris],
    },
    { 
      id: "gym-kris-gethin-kirti-nagar",
      category: "gym",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT KRIS GETHIN GYM, KIRTI NAGAR",
      desc: "A high-energy, premium professional audio setup designed to deliver an immersive and electrifying fitness experience.",
      img: [ kris],
    },
    {
      id: "gym-kris-gethin-dwarka",
      category: "gym",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT KRIS GETHIN GYM, DWARKA",
      desc: "A high-energy, premium professional audio setup designed to deliver an immersive and electrifying fitness experience.",
      img: [ kris],
    },
    { 
      id: "iit-mandi",
      category: "education", // Changed from 'gov'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT IIT MANDI",
      desc: "A robust and precise professional audio setup tailored to deliver exceptional clarity and coverage for educational and institutional events.",
      img: [iitmandi],
    },
    { 
      id: "max-hospital-gurugram",
      category: "corporate", // Changed from 'healthcare'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT MAX HOSPITAL, GURUGRAM SEC 66",
      desc: "A sophisticated and highly articulate professional audio setup designed to deliver pristine sound across medical, administrative, and conference zones.",
      img: [max],
    },
    {
      id: "nainital-high-court",
      category: "gov",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT NAINITAL HIGH COURT AUDITORIUM & CLASSROOMS",
      desc: "A comprehensive, high-fidelity professional audio installation designed to provide exceptional vocal clarity and widespread coverage for judicial and educational proceedings.",
      img: [nannital],
    },
    {
      id: "the-studs-sports-bar-pune",
      category: "hospitality", // Changed from 'hospitality-entertainment'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT THE STUDS SPORTS BAR, PUNE",
      desc: "A high-energy, immersive professional audio setup designed to deliver an electrifying entertainment and sports viewing experience.",
      img: [ studebar],
    },
    {
      id: "pegasus-restaurant-nashik",
      category: "hospitality",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT PEGASUS RESTAURANT, NASHIK",
      desc: "A premium and immersive professional audio setup designed to deliver an exceptional dining and entertainment experience.",
      img: [nasik],
    },
    {
      id: "aviraj-farmhouse-chhatarpur",
      category: "hospitality", // Changed from 'hospitality-events'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT AVIRAJ FARMHOUSE, CHHATARPUR",
      desc: "A versatile and reliable professional audio setup designed to deliver clear sound coverage for private gatherings and events.",
      img: [aviraj],
    },
    {
      id: "shes-here-japanese-restaurant-gurugram",
      category: "hospitality",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT SHE'S HERE JAPANESE RESTAURANT, GURUGRAM",
      desc: "A premium and immersive professional audio setup designed to deliver an exceptional and authentic dining experience.",
      img: [she],
    },
    { 
      id: "gym-golds-gym-ranchi",
      category: "gym",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT GOLD'S GYM, RANCHI",
      desc: "A high-energy, premium professional audio setup designed to deliver an immersive and electrifying fitness experience.",
      img: [gold],
    },
    {
      id: "mumbai-premium-residential-project",
      category: "corporate", // Changed from 'residential'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT MUMBAI PREMIUM RESIDENTIAL PROJECT",
      desc: "A sophisticated and highly articulate professional audio setup designed to deliver pristine sound across luxury residential spaces.",
      img: [mumbai2],
    },
    {  
      id: "mansarovar-house-rajouri-garden",
      category: "corporate", // Changed from 'residential-commercial'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT MANSAROVAR HOUSE, RAJOURI GARDEN, DELHI",
      desc: "A streamlined and articulate professional audio setup designed to deliver pristine sound coverage and clarity.",
      img: [man3],
    },
    {
      id: "dps-faridabad-auditorium",
      category: "education",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT DELHI PUBLIC SCHOOL, FARIDABAD - AUDITORIUM",
      desc: "A robust and precise professional audio setup tailored to deliver exceptional clarity and coverage for educational events and assemblies.",
      img: [dps2],
    },  
    {
      id: "mocha-cafe-bar-jamshedpur",
      category: "hospitality",
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT MOCHA CAFÉ & BAR, JAMSHEDPUR",
      desc: "A premium and versatile professional audio setup designed to deliver an exceptional dining and entertainment experience.",
      img: [mocha],
    },
    {
      id: "kibou-model-town-delhi",
      category: "hospitality", // Changed from 'hospitality-entertainment'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT KIBOU, MODEL TOWN, DELHI",
      desc: "A massive, high-performance professional audio setup designed to deliver an electrifying and immersive entertainment experience.",
      img: [kibo2],
    },
    {
      id: "khalsa-parivar-mayapuri-delhi",
      category: "worship", // Changed from 'community'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT KHALSA PARIVAR, MAYAPURI, DELHI",
      desc: "A streamlined and articulate professional audio setup designed to deliver pristine sound coverage and clarity for community gatherings.",
      img: [khalsha],
    },
    { 
      id: "millionaire-the-lux-club-noida",
      category: "hospitality", // Changed from 'hospitality-entertainment'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT MILLIONAIRE – THE LUX CLUB, NOIDA",
      desc: "A premium, high-energy professional audio setup designed to deliver an immersive and electrifying nightlife experience.",
      img: [noida2],
    },
    {
      id: "one8-commune-aerocity-gurugram",
      category: "hospitality", // Changed from 'hospitality-entertainment'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT ONE8 COMMUNE, AEROCITY, GURUGRAM",
      desc: "A premium, high-energy professional audio setup designed to deliver an immersive and electrifying nightlife and dining experience.",
      img: [one8],
    },
    {
      id: "oral-sky-bar-gurugram",
      category: "hospitality", // Changed from 'hospitality-entertainment'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT ORAL SKY BAR, GURUGRAM",
      desc: "A premium and versatile professional audio setup designed to deliver an exceptional rooftop dining and entertainment experience.",
      img: [oral],
    },
    { 
      id: "dragonfly-mumbai",
      category: "hospitality", // Changed from 'hospitality-entertainment'
      title: "PROFESSIONAL AUDIO DEPLOYMENT AT DRAGONFLY, MUMBAI",
      desc: "A premium, high-energy professional line array audio setup designed to deliver an immersive and electrifying nightlife experience.",
      img: [dragon2],
    },
    {
      id: "pune-event-2025",
      category: "event",
      title: "EXCLUSIVE AMATE AUDIO SHOWCASE IN PUNE 2025",
      desc: "An exclusive and highly anticipated product showcase bringing together leading system integrators and audio professionals to experience Amate Audio's latest innovations.",
      img: [demopune2],
      },
      {
   id: "ps-sound-pune-deployment",
  category: "event",
  title: "HIGH-PERFORMANCE AUDIO DEPLOYMENT FOR PS SOUND, PUNE",
  desc: "A powerful Louis Martin professional audio deployment featuring Q80 line array systems and S218 dual subwoofers, engineered to deliver exceptional clarity, high SPL, and impactful bass for live events.",
  img: [pss], // Add your image variable here}
  },
  { id: "btc-production-nagpur-deployment",
  category: "event",
  title: "LARGE-SCALE PROFESSIONAL AUDIO DEPLOYMENT FOR BTC PRODUCTION, NAGPUR",
  desc: "A high-output Louis Martin line array deployment featuring Q80 and Q60 systems, designed to deliver exceptional coverage, powerful performance, and outstanding audio clarity for concerts and large-scale live productions.",
  img: [btc], // Add your image variable here
  },
    {
      id: "as-sound-live-deployment",
  category: "event",
  title: "PREMIUM TOURING & LIVE EVENT AUDIO DEPLOYMENT FOR AS SOUND",
  desc: "A robust and high-performance touring audio setup featuring state-of-the-art line arrays and subwoofers to deliver uncompromised live sound reinforcement.",
  img: [assound],
},

{id: "balance-box-deployment",
  category: "event",
  title: "HIGH-PERFORMANCE AUDIO DEPLOYMENT FOR BALANCE BOX",
  desc: "A comprehensive, tour-grade professional audio setup combining advanced line arrays, earth-shaking subwoofers, and high-fidelity point source speakers for unparalleled live sound.",
  img: [balancebox], 
},



  ];

  // 1. Filter Logic
  const filteredData =
    active === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === active);

  // 2. Pagination Calculation Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (catId) => {
    setActive(catId);
    setCurrentPage(1); 
  };

  return (
    <>
      <Helmet>
        <title>Case Studies & Installations | Eminent Audio Visual</title>
        <meta 
          name="description" 
          content="Explore our professional audio & visual solutions designed for events, hospitality, education, government, and corporate spaces." 
        />
      </Helmet>

      <section 
        className="min-h-screen bg-gradient-to-b from-[#071028] via-[#0B1736] to-[#12254A] py-16 md:py-20 px-4 sm:px-6 text-white overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
      >
        
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[3px] md:tracking-[5px] text-blue-300 text-xs md:text-sm mb-4">
            Real World Installations
          </p>
          <h1 className="text-3xl md:text-6xl font-bold mb-5">
            Case <span className="text-blue-400">Studies</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed px-2">
            Explore our professional audio & visual solutions designed for
            events, hospitality, education, government, and corporate spaces.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full text-xs md:text-sm font-medium
                transition-all duration-300 border whitespace-nowrap
                ${
                  active === cat.id
                    ? "bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] border-blue-400 text-white shadow-lg"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-blue-500/10 hover:border-blue-400"
                }
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
          <AnimatePresence>
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={`/case-study/${item.id}`}
                  className="
                    group relative overflow-hidden rounded-3xl
                    border border-white/10 bg-white/5 backdrop-blur-md
                    hover:border-blue-400/50 transition-all duration-500
                    hover:-translate-y-2 block h-full min-h-[420px]
                  "
                >
                  <div className="overflow-hidden h-60 sm:h-64 md:h-72">
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="
                          w-full h-full object-cover
                          group-hover:scale-110 transition duration-700
                        "
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/90 text-white text-[10px] sm:text-xs tracking-wide uppercase shadow-lg">
                    {/* DYNAMIC CATEGORY LABEL */}
                    {getCategoryLabel(item.category)}
                  </div>

                  <div className="absolute bottom-0 p-5 sm:p-6 w-full">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-300 transition line-clamp-2">
                      {item.title}
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {item.desc}
                    </p>

                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-300 group-hover:translate-x-2 transition duration-300">
                      Explore Project →
                    </span>
                  </div>

                  <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-blue-500/10 blur-3xl rounded-full"></div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16 max-w-md mx-auto">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border transition-all text-xs sm:text-sm ${
                currentPage === 1
                  ? "border-white/5 text-gray-600 cursor-not-allowed"
                  : "border-white/10 text-gray-300 hover:bg-blue-500/20 hover:border-blue-400"
              }`}
            >
              <FaChevronLeft />
            </button>

            <div className="flex gap-1.5 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={`page-${pageNumber}`}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`
                    w-9 h-9 sm:w-11 sm:h-11 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border
                    ${
                      currentPage === pageNumber
                        ? "bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] border-blue-400 text-white shadow-md scale-105"
                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border transition-all text-xs sm:text-sm ${
                currentPage === totalPages
                  ? "border-white/5 text-gray-600 cursor-not-allowed"
                  : "border-white/10 text-gray-300 hover:bg-blue-500/20 hover:border-blue-400"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default CaseStudy;