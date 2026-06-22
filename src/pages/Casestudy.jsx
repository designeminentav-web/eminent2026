import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBroadcastTower,
  FaHotel,
  FaBuilding,
  FaGraduationCap,
  FaPlaceOfWorship,
  FaLandmark,
} from "react-icons/fa";

const CaseStudy = () => {
  const [active, setActive] = useState("all");

  // 🔥 Random Image Function
  const getImg = (keyword) =>
    `https://source.unsplash.com/900x700/?${keyword}`;

  // ✅ ALL DATA
  const caseStudies = [
    {
      id: "concert",
      category: "event",
      title: "Concert Audio Setup",
      desc: "Large-scale concert sound system with immersive coverage.",
      img: getImg("concert"),
    },
    {
      id: "dj-night",
      category: "event",
      title: "DJ Night Setup",
      desc: "High-energy DJ performance sound solution.",
      img: getImg("dj,party"),
    },
    {
      id: "hotel",
      category: "hospitality",
      title: "Hotel Installation",
      desc: "Luxury hotel ambient audio integration.",
      img: getImg("hotel,lobby"),
    },
    {
      id: "restaurant",
      category: "hospitality",
      title: "Restaurant Audio",
      desc: "Premium dining ambiance sound experience.",
      img: getImg("restaurant,cafe"),
    },
    {
      id: "office",
      category: "corporate",
      title: "Office Conference Setup",
      desc: "Professional conference room AV system.",
      img: getImg("office,meeting"),
    },
    {
      id: "mall",
      category: "corporate",
      title: "Mall Announcement System",
      desc: "Centralized public announcement solution.",
      img: getImg("shopping mall"),
    },
    {
      id: "school",
      category: "education",
      title: "Smart School Audio",
      desc: "Modern classroom communication system.",
      img: getImg("classroom"),
    },
    {
      id: "college",
      category: "education",
      title: "College Auditorium",
      desc: "High-performance auditorium sound setup.",
      img: getImg("auditorium"),
    },
    {
      id: "railway",
      category: "gov",
      title: "Railway Announcement",
      desc: "Reliable station PA system integration.",
      img: getImg("railway station"),
    },
    {
      id: "airport",
      category: "gov",
      title: "Airport Audio System",
      desc: "Clear public announcement solution.",
      img: getImg("airport"),
    },
    {
      id: "temple",
      category: "worship",
      title: "Temple Audio Solution",
      desc: "Crystal-clear devotional sound system.",
      img: getImg("temple"),
    },
    {
      id: "church",
      category: "worship",
      title: "Church Sound Setup",
      desc: "Speech-focused worship audio system.",
      img: getImg("church"),
    },
  ];

  // ✅ Categories
  const categories = [
    {
      id: "all",
      label: "All",
      icon: <FaBroadcastTower />,
    },
    {
      id: "gov",
      label: "Government",
      icon: <FaLandmark />,
    },
    {
      id: "worship",
      label: "Worship",
      icon: <FaPlaceOfWorship />,
    },
    {
      id: "hospitality",
      label: "Hospitality",
      icon: <FaHotel />,
    },
    {
      id: "GYM and Sports",
      label: "GYM & Sports",
      icon: <FaHotel />,
    },
    {
      id: "education",
      label: "Education",
      icon: <FaGraduationCap />,
    },
    {
      id: "corporate",
      label: "Corporate",
      icon: <FaBuilding />,
    },
    {
      id: "event",
      label: "Events",
      icon: <FaBroadcastTower />,
    },
  ];

  // ✅ Filter
  const filteredData =
    active === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === active);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#071028] via-[#0B1736] to-[#12254A] py-20 px-6 text-white overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-blue-300 text-sm mb-4">
          Real World Installations
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Case <span className="text-blue-400">Studies</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 leading-8">
          Explore our professional audio & visual solutions designed for
          events, hospitality, education, government, and corporate spaces.
        </p>
      </div>

      {/* ===========================
          FUTURE USE - COMMENTED CODE
      ============================ */}

      {/*
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`
              flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
              transition-all duration-300 border
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Link
              to={`/case-study/${item.id}`}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/5 backdrop-blur-md
                hover:border-blue-400/50 transition-all duration-500
                hover:-translate-y-2 block
              "
            >
              <div className="overflow-hidden h-72">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110 transition duration-700
                  "
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute top-5 left-5 px-4 py-1 rounded-full bg-blue-500/90 text-white text-xs tracking-wide uppercase shadow-lg">
                {item.category}
              </div>

              <div className="absolute bottom-0 p-6">
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-300 transition">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-300 leading-6 mb-5">
                  {item.desc}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 group-hover:translate-x-2 transition duration-300">
                  Explore Project →
                </span>
              </div>

              <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-blue-500/20 blur-3xl rounded-full"></div>
            </Link>
          </motion.div>
        ))}
      </div>
      */}

      {/* ===========================
            COMING SOON SECTION
      ============================ */}

      <div className="flex items-center justify-center min-h-[150px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-2xl font-bold text-blue-400 mb-6">
            Coming Soon
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
            We are currently preparing our latest case studies and project
            showcases. Stay tuned for exciting updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;