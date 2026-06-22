import React from "react";
import auditoriums1 from "../../assets/solution/auditoriums1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
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

const Auditorium = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12254A] text-white py-20 px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
        >

          {/* Small Heading */}
          <motion.p
            variants={fadeUp}
            custom={1}
            className="uppercase tracking-[4px] text-blue-400 mb-4 text-sm font-semibold"
          >
            Exceptional Experience
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl md:text-6xl font-black leading-tight mb-6"
          >
            Auditorium{" "}
            <span className="text-blue-500">
              Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-gray-300 leading-8 mb-8 text-base md:text-lg"
          >
            At Eminent Audio Visual, we create powerful and immersive
            auditorium experiences with advanced audio and visual solutions.
            From seminar halls to large performance venues, our systems are
            designed to deliver crystal-clear sound, seamless communication,
            and outstanding performance for every event.
          </motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">

            {[
              {
                title: "Wide Coverage",
                desc: "Balanced audio throughout the venue.",
              },
              {
                title: "Echo-Free",
                desc: "Crystal-clear speech intelligibility.",
              },
              {
                title: "High Power",
                desc: "Professional-grade speaker systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 4}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-md
                  hover:bg-blue-500/10
                  transition duration-300
                  shadow-lg
                "
              >
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

          {/* CTA BUTTON */}
          <motion.div
            variants={fadeUp}
            custom={7}
            className="flex flex-wrap items-center gap-4"
          >

            <Link
              to="/contact"
              className="
                px-8 py-4
                bg-blue-600 hover:bg-blue-700
                rounded-xl
                font-semibold
                transition duration-300
                shadow-lg hover:shadow-blue-500/30
                hover:-translate-y-1
              "
            >
              Get In Touch
            </Link>

            {/* NEXT BUTTON ADDED HERE */}
            <Link
              to="/solutions/live-events"
              className="
                flex items-center gap-2
                px-8 py-4
                border border-white/20
                hover:border-blue-500
                hover:bg-blue-500/10
                rounded-xl
                font-semibold
                transition duration-300
                hover:-translate-y-1
              "
            >
              Next &rarr;
            </Link>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
          className="relative group"
        >

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl group-hover:bg-blue-500/30 transition duration-500"></div>

          {/* Floating Animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >

            <img
              src={auditoriums1}
              alt="Auditorium"
              className="
                relative
                rounded-3xl
                shadow-2xl
                object-cover
                w-full
                h-[550px]
                group-hover:scale-[1.02]
                transition duration-500
              "
            />

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Auditorium;