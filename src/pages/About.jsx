import React, { useEffect, useState, useRef } from "react";
import {
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaProjectDiagram,
  FaUsers,
  FaAward,
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaCogs,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ceo from "../assets/brand/ceo.PNG";
import manager from"../assets/brand/manager.JPEG";
import sales from "../assets/brand/sales.JPg";
import presales from "../assets/brand/presales.PNG";
import amar from "../assets/brand/amar.PNG";
import anju from "../assets/brand/anju.PNG";
import s2 from "../assets/brand/s2.JPEG";
import dhiru from "../assets/brand/dhiru.JPG";
import lalit from "../assets/brand/lalit.PNG"; 
import sanjay from "../assets/brand/sanjay.PNG";
import atul from "../assets/brand/atul.PNG";
import anmol from "../assets/brand/anmol.JPG";
import subo from "../assets/brand/subo.PNG";
import home from "../assets/solution/home.JPG";


import { motion } from "framer-motion";

/* COUNTER COMPONENT */
const Counter = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const sliderRef = useRef(null);

  // SEO Meta Tags Optimization Setup
  useEffect(() => {
    document.title = "About Us | Eminent Audio Visual - Professional AV Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn more about Eminent Audio Visual. We deliver future-ready professional audio-visual systems, turnkey installations, and end-to-end technical support."
      );
    }
  }, []);

  const howWeDoIt = [
    {
      icon: <FaHandshake />,
      title: "Authenticity",
      desc: "We operate with genuine commitment, building trust through transparency and integrity.",
    },
    {
      icon: <FaAward />,
      title: "Expertise",
      desc: "Our team brings deep technical knowledge and industry experience, ensuring solutions that are precise, reliable, and future ready.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Structured Implementation",
      desc: "We follow a systematic approach, turning complex requirements into streamlined processes that deliver consistent results.",
    },
    {
      icon: <FaLightbulb />,
      title: "Insightful Analysis",
      desc: "Through in depth evaluation, we identify challenges and opportunities, crafting strategies that drive improvement and long term success.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaShieldAlt />,
      title: "Professional & Ethical Standards",
    },
    {
      icon: <FaClock />,
      title: "Commitment to Timely Delivery",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Best-in-Class Solutions",
    },
    {
      icon: <FaUsers />,
      title: "Honest & Supportive Team",
    },
    {
      icon: <FaCogs />,
      title: "Deep Technical Expertise",
    },
    {
      icon: <FaTools />,
      title: "Dedicated In-House Service & Repair",
    },
  ];

  // 13 Team Members Array Setup
  const teamMembers = [
    { name: "Akhilesh Prajapati", designation: "Founder & CEO", image: [ceo],},
    { name: "Surendra Kumar", designation: "Director - Operations", image: [s2],},
    { name: "Suman Pajapati", designation: "Sales & Marketing (Manager)", image: [manager],},
    { name: "Amarnath Prajapati", designation: "Project Manager", image: [amar],},
    { name: "Dhirendra Prajapati", designation: "Product Manager", image:[dhiru],},
    { name: "Rohit Mandal", designation: "Sales Manager", image: [sales],},
    { name: "Prashant Kumar", designation: "Application Engineer", image: [presales],},
    { name: "Lalit Shahane", designation: "Sales Manager (Pro Audio)", image:[lalit],},
    { name: "Subodh Kamble", designation: "Sound Engineer", image: [subo],},
    { name: "Anju Kumari", designation: "Accounts Executive", image: [anju],},
    { name: "Sanjay Prajapati", designation: "Sr. AV Technician", image: [sanjay],},
    { name: "Atul Kumar", designation: "AV Technician", image: [atul],},
    { name: "Anmol Prajapati", designation: "Design Engineer", image: [anmol],},
  
  
  ];

  // Carousel Scroll Handler tailored for dynamic widths
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      // Slides single column layout offsets or multi card scrolling intervals
      const scrollAmount = direction === "left" ? -containerWidth * 0.75 : containerWidth * 0.75;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Animation Variants for Layout Blocks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#050B18] text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20 lg:py-32">
        {/* BACKGROUND IMAGE */}
        <img
          src= {home}
          alt="Eminent Audio Visual Infrastructure Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY & GRADIENTS */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/40 via-[#050B18]/80 to-[#050B18]"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-blue-400 text-xs sm:text-sm mb-4 font-semibold">
              About Us
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              WHO WE ARE
            </h1>

            <div className="w-24 sm:w-32 h-[4px] bg-blue-500 rounded-full mb-8"></div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-5 sm:leading-8 max-w-7xl mb-12 px-2">
             At Eminent Audio Visual, we are passionate experts committed to elevating the professional audiovisual industry. We proudly represent and distribute some of the most distinguished global brands, while delivering end to end solutions that redefine innovation and reliability.
Our turnkey approach ensures seamless execution — from import and integration of products to final commissioning and performance validation. Every project we undertake is designed to inspire confidence and deliver measurable value, bringing productivity, efficiency, and sustainability to life for businesses and institutions alike.
By blending technical mastery with creative vision, we transform environments into immersive experiences, setting new benchmarks in audiovisual excellence.
 
            </p>

            {/* HERO HERO-FEATURES GRID */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl"
            >
              <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg flex flex-col items-center justify-center text-center">
                <div className="text-blue-400 text-4xl mb-3">
                  <FaUsers />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-gray-400 text-sm leading-6">
                  Skilled professionals with industry expertise.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg flex flex-col items-center justify-center text-center">
                <div className="text-blue-400 text-4xl mb-3">
                  <FaAward />
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                <p className="text-gray-400 text-sm leading-6">
                  Delivering world-class AV solutions with precision.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-center mx-auto sm:max-w-md lg:max-w-full">
                <div className="text-blue-400 text-4xl mb-3">
                  <FaTools />
                </div>
                <h3 className="font-bold text-lg mb-2">End-to-End Support</h3>
                <p className="text-gray-400 text-sm leading-6">
                  Complete support from planning to execution.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-16 md:py-24">
        
        {/* MISSION & VISION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col items-center text-center justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl mb-5 shadow-lg shadow-blue-600/30">
              <FaBullseye />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-7 text-sm sm:text-base">
              Eminent Audio Visual is committed to delivering the highest level of service for every client. We embrace the history, culture, and character of each community, becoming a seamless partner and trusted member of the team—dedicated to providing extraordinary service at every step.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col items-center text-center justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center text-2xl mb-5 shadow-lg shadow-cyan-600/30">
              <FaEye />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-7 text-sm sm:text-base">
              Our ultimate objective is to be regarded as the benchmark for service excellence and client satisfaction, delivering elevated success and prosperity to our clients. We believe in highly personalized services, solutions tailored to specific needs, and long-term partnerships built on 100% customer satisfaction.
              
            </p>
          </motion.div>
        </motion.section>

        {/* HOW WE DO IT */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-blue-400 text-xs sm:text-sm mb-3 font-semibold">
              How We Do It
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              OUR WORKING PROCESS
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {howWeDoIt.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg flex flex-col items-center text-center justify-center"
              >
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-6 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-blue-400 text-xs sm:text-sm mb-3 font-semibold">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              THE EMINENT AUDIO VISUAL DIFFERENCE
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center justify-center text-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 transition-colors duration-300 hover:bg-white/10"
              >
                <div className="text-blue-400 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold leading-6">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12386b] rounded-[30px] p-6 sm:p-10 md:p-12 mb-24 border border-white/5 shadow-2xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="uppercase tracking-[4px] text-blue-300 text-xs sm:text-sm mb-3 font-semibold">
              Our Achievements
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-4 text-white">
              TRUSTED BY HUNDREDS
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed px-2">
              Over the years, we have built a reputation for delivering precision-driven audio-visual excellence, backed by numbers that showcase our growth, dedication, and expertise.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center"
          >
            {[
              {
                icon: <FaProjectDiagram />,
                value: 500,
                label: "Projects Completed",
              },
              {
                icon: <FaAward />,
                value: 25,
                label: "Brands Partnered",
              },
              {
                icon: <FaUsers />,
                value: 1500,
                label: "Happy Clients",
              },
              {
                icon: <FaCheckCircle />,
                value: 10,
                label: "Years Experience",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center backdrop-blur-sm"
              >
                <div className="text-3xl text-blue-400 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold mb-2 text-white">
                  <Counter end={item.value} />
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm font-medium leading-5">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CAROUSEL TEAM SECTION */}
        <section className="pb-8 relative">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-blue-400 text-xs sm:text-sm mb-3 font-semibold">
              Meet Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              GET TO KNOW US
            </h2>
          </div>

          {/* SLIDER WRAPPER CONTAINER */}
          <div className="relative w-full px-2 sm:px-4 group">
            
            {/* LEFT ARROW BUTTON */}
            <button
              onClick={() => scrollSlider("left")}
              className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-blue-600/90 hover:bg-blue-500 text-white p-3 rounded-full shadow-xl transition-all duration-300 backdrop-blur-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 flex items-center justify-center border border-white/10"
              aria-label="Slide Left"
            >
              <FaChevronLeft className="text-sm sm:text-base" />
            </button>

            {/* RESPONSIVE TRACK CONFIGURATION (Shows 3 to 4 cards perfectly on Large Screens) */}
            <div
              ref={sliderRef}
              className="w-full flex overflow-x-auto gap-5 scrollbar-hide py-6 px-1 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] shrink-0 bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col items-center text-center shadow-lg snap-start"
                >
                  <div className="w-full overflow-hidden h-[260px] sm:h-[300px]">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex flex-col items-center justify-center w-full bg-[#070e1e] flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-white truncate w-full px-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 mb-4 text-xs sm:text-sm font-medium h-[40px] flex items-center justify-center leading-tight">
                      {member.designation}
                    </p>
                    {/* <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm border border-white/10 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 mt-auto"
                    >
                      <FaLinkedin className="text-blue-500" />
                      Profile
                    </a> */}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT ARROW BUTTON */}
            <button
              onClick={() => scrollSlider("right")}
              className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-blue-600/90 hover:bg-blue-500 text-white p-3 rounded-full shadow-xl transition-all duration-300 backdrop-blur-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 flex items-center justify-center border border-white/10"
              aria-label="Slide Right"
            >
              <FaChevronRight className="text-sm sm:text-base" />
            </button>

          </div>
        </section>

      </div>
    </div>
  );
};

export default About;