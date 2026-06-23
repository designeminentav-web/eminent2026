import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // <-- SEO ke liye add kiya
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>Contact Us | Eminent Audio Visual</title>
        <meta 
          name="description" 
          content="Get in touch with Eminent Audio Visual. Connect with our professional AV team for premium audio and visual solutions tailored to your business needs." 
        />
        <meta 
          name="keywords" 
          content="Contact Eminent Audio Visual, AV Solutions Contact, Sound Systems Inquiry, Delhi" 
        />
      </Helmet>

      <section 
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#071028] via-[#0B1736] to-[#12254A] py-20 px-6 text-white"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1000px" }} // <-- SPEED OPTIMIZATION
      >
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[5px] text-blue-300 text-sm mb-4">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-blue-400">Us</span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto leading-8">
              Connect with our professional AV team for premium audio and visual
              solutions tailored to your business needs.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE - FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-3xl p-8 md:p-10
                shadow-[0_10px_50px_rgba(0,0,0,0.3)]
              "
            >

              <h2 className="text-3xl font-semibold mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <InputField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />

                  <InputField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <InputField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />

                  <InputField
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />

                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-300 mb-3">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your requirements..."
                    className="
                      w-full px-5 py-4 rounded-2xl
                      bg-white/5 border border-white/10
                      focus:border-blue-400
                      focus:outline-none
                      text-white placeholder:text-gray-500
                      resize-none
                    "
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                    w-full py-4 rounded-2xl
                    bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3]
                    hover:scale-[1.02]
                    transition-all duration-300
                    shadow-lg
                    font-semibold
                    flex items-center justify-center gap-3
                  "
                >
                  <FaPaperPlane />
                  Send Message
                </button>

              </form>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Office Address"
                content="WZ-572/J, Ground Floor, Naraina Village, Near Naraina Vihar Club, New Delhi - 110028"
              />

              <InfoCard
                icon={<FaEnvelope />}
                title="Email Address"
                content="info@eminentav.in"
              />

              <InfoCard
                icon={<FaPhoneAlt />}
                title="Phone Number"
                content="+91 011-7185 9054"
              />

              {/* Business Hours */}
              <div
                className="
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-3xl p-8
                "
              >

                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <FaClock className="text-blue-400" />
                  Business Hours
                </h3>

                <HoursRow day="Monday - Friday" time="9:00 AM - 6:00 PM" />
                <HoursRow day="Saturday" time="10:00 AM - 4:00 PM" />
                <HoursRow day="Sunday" time="Closed" />

              </div>

              {/* Support Card */}
              <div
                className="
                  bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3]
                  rounded-3xl p-8 shadow-xl
                "
              >

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                    <FaHeadset />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Emergency Support
                    </h3>

                    <p className="text-blue-100 text-sm">
                      24/7 Technical Assistance
                    </p>
                  </div>
                </div>

                <p className="text-blue-50 leading-7 mb-6">
                  Need urgent assistance with your audio or AV system?
                  Our support team is always ready to help.
                </p>

                <button
                  className="
                    bg-white text-[#2F6FA3]
                    px-6 py-3 rounded-xl
                    font-semibold
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Call Support
                </button>

              </div>

            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
};

/* 🔥 Input Field */
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-300 mb-3">
      {label}
    </label>

    <input
      {...props}
      className="
        w-full px-5 py-4 rounded-2xl
        bg-white/5 border border-white/10
        focus:border-blue-400
        focus:outline-none
        text-white placeholder:text-gray-500
      "
    />
  </div>
);

/* 🔥 Info Card */
const InfoCard = ({ icon, title, content }) => (
  <div
    className="
      flex items-start gap-5
      bg-white/5 backdrop-blur-xl
      border border-white/10
      rounded-3xl p-6
      hover:border-blue-400/40
      transition-all duration-300
    "
  >

    <div
      className="
        min-w-[55px] h-[55px]
        rounded-2xl
        bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3]
        flex items-center justify-center
        text-xl
      "
    >
      {icon}
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-300 leading-7 text-sm">
        {content}
      </p>
    </div>

  </div>
);

/* 🔥 Hours Row */
const HoursRow = ({ day, time }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/10 last:border-none">
    
    <span className="text-gray-300">
      {day}
    </span>

    <span className="font-medium text-blue-300">
      {time}
    </span>

  </div>
);

export default Contact;