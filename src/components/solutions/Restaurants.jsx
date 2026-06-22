import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import res from "../../assets/solution/res.jpg";
import {
  FaMusic,
  FaUtensils,
  FaVolumeUp,
  FaArrowRight,
} from "react-icons/fa";

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

const Restaurants = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12254A] text-white py-20 px-6">

      {/* Animated Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >

          {/* Small Heading */}
          <motion.p
            variants={fadeUp}
            custom={1}
            className="uppercase tracking-[4px] text-gray-400 mb-4 text-sm"
          >
            Elegant Dining Atmosphere
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Restaurants &{" "}
            <span className="text-blue-500">Cafes</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-gray-300 leading-8 mb-8"
          >
            Enhance every dining experience with premium audio solutions from
            Eminent Audio Visual. Designed for restaurants, cafés, and luxury
            dining spaces, our systems create the perfect ambiance with soft,
            balanced music and crystal-clear sound that elevates comfort and
            customer experience.
          </motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">

            {[
              {
                icon: <FaMusic />,
                title: "Ambient Sound",
                desc: "Warm and balanced background audio.",
              },
              {
                icon: <FaUtensils />,
                title: "Soft Music",
                desc: "Relaxing sound experience for guests.",
              },
              {
                icon: <FaVolumeUp />,
                title: "Customer Comfort",
                desc: "Enhanced atmosphere for memorable dining.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index + 4}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:bg-blue-500/10 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-4">
                  {item.icon}
                </div>

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

            <Link
              to="/contact"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/30 inline-flex items-center gap-3"
            >
              Get In Touch

              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </Link>

            {/* NEXT BUTTON ADDED HERE */}
            <Link
              to="/solutions/gym-fitness"
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
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative group"
        >

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl group-hover:bg-blue-500/30 transition duration-500"></div>

          {/* Floating Blur */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"
          />

          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={res}
            alt="Restaurants & Cafes"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[550px] transition duration-500"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default Restaurants;