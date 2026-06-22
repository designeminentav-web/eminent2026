import React from "react";
import { motion } from "framer-motion";
import about from "../assets/hero/about.jpg";
import {
  FaCheckCircle,
  FaVolumeUp,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16 lg:py-20
        bg-gradient-to-br
        from-[#06111F]
        via-[#08192E]
        to-[#0B2545]
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-blue-500/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-cyan-400/10 blur-[100px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              "
            >
              <img
                src= {about}
                alt="Audio"
                className="
                  w-full
                  h-[300px]
                  sm:h-[380px]
                  lg:h-[430px]
                  object-cover
                  group-hover:scale-105
                  transition duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111F]/80 via-transparent to-transparent"></div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                
                "
              >
                

                <div>
                  {/* <h4 className="text-white text-sm font-semibold">
                    Premium AV
                  </h4> */}

                  <p 
                  >
                   
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
               
              "
            >
              
              
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-6
                text-4xl md:text-5xl
                font-black
                leading-tight
                text-white
              "
            >
              WHO WE ARE
              <span className="block text-blue-400">
              
              </span>
            </motion.h2>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                mt-6
                text-gray-300
                leading-8
                text-[15px]
              "
            >
            Founded in 2016, we have grown into a team of experts committed to advancing and delivering some of the finest brands in the professional audiovisual industry. Through our innovative turnkey approach, we manage every stage — from importing and logistics to execution and commissioning. Each solution is carefully crafted to enhance productivity, efficiency, and sustainability. Our systems are future‑ready, empowering businesses and individuals with transformative technologies. By blending technical precision with visionary design, we create environments that inspire, perform, and endure. With every project, we reaffirm our dedication to excellence and innovation in professional audiovisual solutions.

              <br />
              <br />

         

            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                mt-4
                text-gray-400
                leading-8
                text-[15px]
              "
            >
             
            </motion.p>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="
                    flex items-center gap-3
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-4 py-4
                    hover:border-blue-500/30
                    transition duration-300
                  "
                >
                  <div
                    className="
                      w-9 h-9 rounded-full
                      bg-blue-500/20
                      flex items-center justify-center
                      text-blue-400 text-sm
                    "
                  >
                    <FaCheckCircle />
                  </div>

                  <span className="text-white text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;