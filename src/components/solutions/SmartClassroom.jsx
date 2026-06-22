import React from "react";
import { motion } from "framer-motion";
import school from "../../assets/solution/school.jpg";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const SmartClassroom = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#06111F] via-[#08192E] to-[#0B2545] text-white py-20 px-6">

      {/* TOP GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-[120px] rounded-full"
      />

      {/* BOTTOM GLOW */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/10 blur-[120px] rounded-full"
      />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >

          {/* SMALL TEXT */}
          <motion.p
            variants={fadeUp}
            custom={1}
            className="uppercase tracking-[4px] text-blue-800 mb-4 text-sm"
          >
            Future-Ready Learning Solutions
          </motion.p>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Smart{" "}
            <span className="text-blue-500">
              Classroom
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-gray-300 leading-8 mb-8"
          >
            Empower modern education with advanced Smart Classroom
            solutions from Eminent Audio Visual. Our integrated audio
            and digital technologies deliver crystal-clear communication,
            seamless connectivity, and engaging learning experiences.
          </motion.p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">

            {[
              {
                icon: <FaChalkboardTeacher />,
                title: "Clear Audio",
                desc: "Enhanced speech clarity for learning.",
              },
              {
                icon: <FaLaptop />,
                title: "Digital Tools",
                desc: "Modern classroom connectivity.",
              },
              {
                icon: <FaUsers />,
                title: "Engagement",
                desc: "Interactive student experiences.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index + 4}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-md
                  hover:bg-blue-500/10
                  hover:border-blue-400/30
                  transition duration-300
                "
              >

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="
                    w-12 h-12 rounded-xl
                    bg-blue-500/20
                    flex items-center justify-center
                    text-[#4FA3D1]
                    text-xl mb-4
                  "
                >
                  {item.icon}
                </motion.div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            custom={8}
            className="flex flex-wrap gap-4 items-center"
          >

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="
                group px-8 py-4
                bg-gradient-to-r
                from-[#4FA3D1]
                to-[#2563EB]
                hover:scale-105
                rounded-xl
                font-semibold
                transition duration-300
                shadow-lg
                hover:shadow-blue-500/30
                inline-flex items-center gap-3
              "
            >
              Get In Touch

              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </Link>

            {/* NEXT BUTTON ADDED HERE */}
            <Link
              to="/solutions/auditoriums"
              className="
                flex items-center gap-2
                px-8 py-4
                border border-white/20
                hover:border-[#4FA3D1]
                hover:bg-blue-500/10
                rounded-xl
                font-semibold
                transition duration-300
                hover:scale-105
              "
            >
              Next &rarr;
            </Link>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative group"
        >

          {/* OUTER GLOW */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl group-hover:bg-blue-500/30 transition duration-500"></div>

          {/* FLOATING LIGHT */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute top-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"
          />

          {/* IMAGE */}
          <motion.img
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.5,
            }}
            src={school}
            alt="Smart Classroom"
            className="
              relative rounded-3xl
              shadow-2xl
              object-cover
              w-full
              h-[350px]
              sm:h-[450px]
              lg:h-[550px]
              border border-white/10
            "
          />

        </motion.div>

      </div>
    </section>
  );
};

export default SmartClassroom;