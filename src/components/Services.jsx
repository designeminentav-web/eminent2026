
// src/components/Services.jsx

import React from "react";
import {
  FaTruck,
  FaComments,
  FaProjectDiagram,
  FaHeadset,
  FaChalkboardTeacher,
  FaPencilRuler,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Distribution",
      description:
        "We ensure seamless distribution of premium professional audio equipment, backed by strong partnerships throughout India.",
      icon: FaTruck,
    },
    {
      title: "Consulting",
      description:
        "Our approach blends precise problem analysis with specialized expertise, ensuring efficient practices that foster growth and innovation.",
      icon: FaComments,
    },
    {
      title: "Design",
      description:
        "We design unique solutions that enhance systems by integrating new functionalities through independent applications across diverse platforms.",
      icon: FaPencilRuler,
    },
    {
      title: "Integration",
      description:
        "Our expertise in system integration creates flawless connectivity. With smart performance, we drive innovation and sustainable growth.",
      icon: FaProjectDiagram,
    },
    {
      title: "Training",
      description:
        "We offer professional training solutions that elevate technical proficiency. Designed for clients and partners, these programs drive innovation and operational excellence.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Support",
      description:
        "We provide dedicated after sales service that guarantees enduring system reliability. With proactive support, we maintain optimal performance and peace of mind.",
      icon: FaHeadset,
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20 md:py-28
        bg-gradient-to-br
        from-[#06111F]
        via-[#08192E]
        to-[#0B2545]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* SMALL TAG */}
          <div
            className="
              inline-flex items-center gap-3
              px-5 py-3 rounded-full
              bg-blue-500/10
              border border-blue-400/20
              text-blue-300 text-sm font-medium
              backdrop-blur-xl
            "
          >
            OUR SERVICES
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-7
              text-4xl md:text-5xl lg:text-6xl
              font-black
              leading-tight
              text-white
            "
          >
            AV
            <span className="block text-blue-400">
              Solutions & Services
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-6
              text-gray-300
              leading-8
              text-[15px] md:text-base
            "
          >
            We provide complete professional audio visual solutions
            with modern technology, smart integration and premium
            support services for every type of venue.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
            
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  transition-all duration-500
                  flex flex-col items-center text-center /* Added for centering */
                  hover:border-blue-500/30
                  hover:bg-white/[0.07]
                "
              >
                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 0,
                    scale: 1.08,
                  }}
                  transition={{
                    // type: "spring",
                    // stiffness: 300,
                  }}
                  className="
                    relative z-10
                    w-16 h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#3B82F6]
                    to-[#2563EB]
                    flex items-center justify-center
                    text-white text-2xl
                    shadow-[0_10px_30px_rgba(37,99,235,0.4)]
                    mx-auto /* Centering the icon box */
                  "
                >
                  <Icon />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10 mt-7 flex flex-col items-center">

                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  {/* Added mx-auto here to center the small decorative line */}
                  <div className="w-14 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-4 mb-5 mx-auto group-hover:w-24 transition-all duration-500"></div>

                  <p className="text-gray-300 leading-7 text-sm">
                    {service.description}
                  </p>

                  {/* BUTTON */}
                  <button className="">
                    {/* Add button content/icons here later if needed */}
                  </button>

                </div>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-blue-500/20 transition duration-500"></div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;