import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import event from "../../assets/solution/event.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const LiveEvents = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12254A] text-white py-20 px-6">

      {/* Animated Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[4px] text-gray-400 mb-4 text-sm"
          >
            Live Performance Solutions
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Live Music & <span className="text-blue-500">Events</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-8 mb-8"
          >
            Deliver unforgettable live experiences with professional audio
            solutions from Eminent Audio Visual. Designed for concerts,
            performances, and large-scale events, our systems provide powerful
            output, crystal-clear sound, and reliable performance to energize
            every audience and elevate every stage.
          </motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">

            {[
              {
                title: "High Output",
                desc: "Powerful sound coverage for large venues.",
              },
              {
                title: "Stage Ready",
                desc: "Reliable systems built for live performance.",
              },
              {
                title: "Event Setup",
                desc: "Seamless integration for every live event.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md hover:bg-blue-500/10 transition duration-300"
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

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-wrap items-center"
          >

            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              Get In Touch
            </Link>

            {/* NEXT BUTTON ADDED HERE */}
            <Link
              to="/solutions/night-clubs"
              className="
                flex items-center gap-2
                px-8 py-4
                border border-white/20
                hover:border-blue-500
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
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group"
        >

          {/* Glow */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl group-hover:bg-blue-500/30 transition duration-500"></div>

          {/* Floating Animation */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <img
              src={event}
              alt="Live Music & Events"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[550px] group-hover:scale-[1.03] transition duration-500"
            />

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default LiveEvents;