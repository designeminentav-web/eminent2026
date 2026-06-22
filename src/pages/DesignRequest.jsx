// src/pages/DesignRequest.jsx

import React, { useState } from "react";
import {
  FaDraftingCompass,
  FaArrowRight,
  FaCheckCircle,
  FaUpload,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaClipboardList,
  FaMapPin,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const DesignRequest = () => {
  const [subwoofer, setSubwoofer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const [consentChecked, setConsentChecked] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (honeypot) {
      setStatusType("error");
      setStatusMessage("Submission rejected. Please try again.");
      return;
    }

    if (!consentChecked) {
      setStatusType("error");
      setStatusMessage("Please confirm that the details are correct and that you allow us to contact you.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatusType("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9+\-\s()]{7,15}$/.test(phone)) {
      setStatusType("error");
      setStatusMessage("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("idle");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@eminentav.in", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to send your request right now.");
      }

      setStatusType("success");
      setStatusMessage("Your design request has been sent successfully. Our team will contact you shortly.");
      form.reset();
      setSubwoofer("");
      setConsentChecked(false);
      setHoneypot("");
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Something went wrong while sending your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#06111F] min-h-screen overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-[#02101F]
          via-[#071B34]
          to-[#0B2545]
          pt-24 md:pt-28
          pb-24 md:pb-32
        "
      >
        {/* GLOW */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full"
        />

        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-cyan-400/10 blur-[160px] rounded-full"
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >

              <motion.span
                variants={fadeUp}
                custom={1}
                className="
                  inline-flex items-center gap-3
                  px-5 py-3 rounded-full
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-300 text-sm font-medium
                  backdrop-blur-xl
                "
              >
                <FaDraftingCompass />
                Premium AV Design Solution
              </motion.span>

              <motion.h1
                variants={fadeUp}
                custom={2}
                className="
                  mt-8
                  text-4xl md:text-6xl
                  font-black
                  leading-tight
                  text-white
                "
              >
                Design Your
                <span className="block text-blue-400">
                  Dream Audio
                </span>
                Experience
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="
                  mt-6
                  text-base md:text-lg
                  leading-8
                  text-gray-300
                "
              >
                Professional AV planning and sound system design for
                auditoriums, conference rooms, clubs, restaurants,
                recording studios and large venues.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  "24 hrs response time",
                  "Custom drawings & layout",
                  "Trusted by Indian venues",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* FEATURES */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                {[
                  "Premium Sound Design",
                  "Custom AV Planning",
                  "Venue Optimization",
                  "Professional Consultation",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={index + 4}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                      flex items-center gap-4
                      bg-white/5
                      border border-white/10
                      rounded-2xl
                      px-5 py-4
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        w-10 h-10
                        rounded-full
                        bg-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                      "
                    >
                      <FaCheckCircle />
                    </div>

                    <span className="text-white font-medium text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <motion.div
                whileHover={{ y: -5 }}
                className="
                  relative
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/10
                  rounded-[30px]
                  p-6 md:p-8
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  overflow-hidden
                "
              >

                <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/20 blur-[80px] rounded-full"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-3xl font-bold text-white">
                      Request A Design
                    </h2>
                   
                  </div>

                  <p className="mt-4 text-gray-300 leading-7 text-sm md:text-base">
                    Share your venue details, preferred audio setup, and project brief—our design team will review it and reach out with the best AV solution.
                  </p>

                  {/* CONTACT */}
                  <div className="mt-8 grid gap-4">

                    {[
                      {
                        icon: <FaPhoneAlt />,
                        title: "Call Us",
                        value: "91 1171068221 ",
                      },
                      {
                        icon: <FaEnvelope />,
                        title: "Email Support",
                        value: "info@eminentav.com",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.02,
                        }}
                        className="
                          flex items-center gap-4
                          p-4 rounded-2xl
                          bg-white/5 border border-white/10
                        "
                      >
                        <div
                          className="
                            w-12 h-12 rounded-full
                            bg-blue-500/20
                            flex items-center justify-center
                            text-blue-400
                          "
                        >
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">
                            {item.title}
                          </p>

                          <h4 className="text-white font-semibold text-sm md:text-base">
                            {item.value}
                          </h4>
                        </div>
                      </motion.div>
                    ))}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="relative -mt-16 md:-mt-20 pb-20">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[30px]
              shadow-[0_20px_80px_rgba(0,0,0,0.18)]
              overflow-hidden
            "
          >

            {/* TOP */}
            <div
              className="
                bg-gradient-to-r
                from-[#0F172A]
                via-[#1E3A8A]
                to-[#2563EB]
                px-6 md:px-12
                py-10
                text-white
              "
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex items-center gap-5">

                <div
                  className="
                    w-16 h-16 md:w-20 md:h-20
                    rounded-3xl
                    bg-white/10
                    flex items-center justify-center
                    text-2xl md:text-3xl
                    backdrop-blur-xl
                  "
                >
                  <FaBuilding />
                </div>

                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold">
                      Project Design Form
                    </h2>

                    <p className="mt-3 text-blue-100 leading-7 text-sm md:text-base">
                      Share your project details and upload venue drawings for Indian corporate, hospitality, education, and auditorium projects.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-blue-50">
                  {[
                    "Venue planning",
                    "Audio & visual design",
                    "Scale-ready proposal",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.25)] backdrop-blur-md"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="p-5 md:p-12">

              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm">
                    <div className="flex items-center gap-3 text-blue-700">
                      <FaClipboardList className="text-xl" />
                      <h3 className="text-xl font-semibold">What we need from you</h3>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-3"><FaMapPin className="mt-1 text-blue-600" /> Venue address, room size, and usage type.</li>
                      <li className="flex items-start gap-3"><FaClock className="mt-1 text-blue-600" /> Expected timeline and preferred contact mode.</li>
                      <li className="flex items-start gap-3"><FaShieldAlt className="mt-1 text-blue-600" /> Floor plans, drawings, and project budget details.</li>
                    </ul>
                  </section>

                  <section className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-[0_18px_45px_rgba(15,23,42,0.15)]">
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Why it works</p>
                    <h3 className="mt-3 text-2xl font-semibold">A clean brief helps us propose the right AV setup faster.</h3>
                    <p className="mt-4 text-slate-200 text-sm leading-7">The clearer your project details, the faster we can deliver a professional design, equipment recommendation, and installation plan.</p>
                  </section>
                </div>
                <input type="hidden" name="_subject" value="New Design Request from Eminent Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ display: "none" }}
                />

                {/* TITLE */}
                <div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Project Information
                  </h3>

                  <div className="h-1 w-24 bg-blue-600 rounded-full mt-4"></div>

                </div>

                {/* INPUTS */}
                <div className="grid md:grid-cols-2 gap-6">

                  {[
                    "Project Name *",
                    "Project Address *",
                    "Company Name",
                    "GST / Tax ID",
                    "PAN / CIN",
                    "Job Title",
                    "Phone Number *",
                    "Email Address *",
                    "City / Location",
                    "State",
                    "PIN Code",
                  ].map((item, index) => (
                    <div key={index}>

                      <label className="block mb-3 font-semibold text-gray-700">
                        {item}
                      </label>

                      <input
                        type={index === 7 ? "email" : index === 6 ? "tel" : "text"}
                        name={
                          index === 0
                            ? "projectName"
                            : index === 1
                            ? "projectAddress"
                            : index === 2
                            ? "companyName"
                            : index === 3
                            ? "gstNumber"
                            : index === 4
                            ? "panNumber"
                            : index === 5
                            ? "jobTitle"
                            : index === 6
                            ? "phone"
                            : index === 7
                            ? "email"
                            : index === 8
                            ? "location"
                            : index === 9
                            ? "state"
                            : "pincode"
                        }
                        placeholder={`Enter ${item}`}
                        required={index === 0 || index === 1 || index === 6 || index === 7}
                        pattern={index === 6 ? "[0-9+\-\s()]{7,15}" : undefined}
                        title={index === 6 ? "Enter a valid phone number" : undefined}
                        className="
                          w-full h-14 px-5
                          rounded-2xl
                          border border-slate-200
                          bg-white
                          text-slate-800
                          shadow-sm
                          outline-none
                          placeholder:text-slate-400
                          focus:border-blue-500
                          focus:ring-4 focus:ring-blue-100
                          transition-all duration-300
                        "
                      />
                    </div>
                  ))}

                </div>

                {/* TEXTAREA */}
                <div>

                  <label className="block mb-3 font-semibold text-gray-700">
                    Project Description
                  </label>

                  <textarea
                    name="projectDescription"
                    rows="5"
                    placeholder="Describe your AV system requirement, room size, audience capacity, and special acoustic needs..."
                    className="
                      w-full p-5
                      rounded-3xl
                      border border-slate-200
                      bg-white
                      text-slate-800
                      shadow-sm
                      outline-none
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:ring-4 focus:ring-blue-100
                      resize-none
                    "
                  ></textarea>

                </div>

                {/* ================= SUBWOOFER SECTION ================= */}
                <div className="space-y-8">

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Should subwoofers be included in the design?
                      <span className="text-red-500">*</span>
                    </h3>

                    {/* YES / NO */}
                    <div className="flex flex-col gap-5 mt-8">

                      <label className="flex items-center gap-4 cursor-pointer">
                        <input
                          type="radio"
                          name="subwoofer"
                          value="yes"
                          checked={subwoofer === "yes"}
                          onChange={(e) => setSubwoofer(e.target.value)}
                          className="w-6 h-6 accent-blue-600"
                        />

                        <span className="text-2xl text-gray-700">
                          yes
                        </span>
                      </label>

                      <label className="flex items-center gap-4 cursor-pointer">
                        <input
                          type="radio"
                          name="subwoofer"
                          value="no"
                          checked={subwoofer === "no"}
                          onChange={(e) => setSubwoofer(e.target.value)}
                          className="w-6 h-6 accent-blue-600"
                        />

                        <span className="text-2xl text-gray-700">
                          no
                        </span>
                      </label>

                    </div>
                  </div>

                  {/* CONDITIONAL OPTIONS */}
                  {subwoofer === "yes" && (
                    <div className="pl-1">

                      <h4 className="text-2xl text-gray-700 mb-8">
                        If yes ...
                      </h4>

                      <div className="flex flex-col gap-6">

                        <label className="flex items-center gap-4 cursor-pointer">
                          <input
                            type="checkbox"
                            name="subwooferOption"
                            value="Flown"
                            className="w-6 h-6 accent-blue-600"
                          />

                          <span className="text-xl text-gray-700">
                            Flown
                          </span>
                        </label>

                        <label className="flex items-center gap-4 cursor-pointer">
                          <input
                            type="checkbox"
                            name="subwooferOption"
                            value="Ground-stacked"
                            className="w-6 h-6 accent-blue-600"
                          />

                          <span className="text-xl text-gray-700">
                            Ground-stacked
                          </span>
                        </label>

                      </div>

                    </div>
                  )}

                </div>

                {/* LEAD VERIFICATION */}
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 md:p-6 space-y-4">
                  <div className="flex items-start gap-3 flex-wrap">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Lead Verification</h3>
                      <p className="mt-2 text-sm text-gray-600">These extra details help us identify genuine business leads and follow up faster.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="block text-sm font-semibold text-gray-700">
                      Project Type
                      <select
                        name="projectType"
                        className="mt-2 w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-blue-500"
                        defaultValue="Auditorium / Hall"
                      >
                        <option>Auditorium / Hall</option>
                        <option>Conference Room</option>
                        <option>Restaurant / Hotel</option>
                        <option>Corporate Office</option>
                        <option>School / College</option>
                        <option>Night Club / Lounge</option>
                        <option>Retail / Showroom</option>
                      </select>
                    </label>

                    <label className="block text-sm font-semibold text-gray-700">
                      Preferred Contact Method
                      <select
                        name="preferredContact"
                        className="mt-2 w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-blue-500"
                        defaultValue="Phone"
                      >
                        <option>Phone</option>
                        <option>Email</option>
                        <option>WhatsApp</option>
                      </select>
                    </label>

                    <label className="block text-sm font-semibold text-gray-700">
                      Estimated Project Budget
                      <select
                        name="budgetRange"
                        className="mt-2 w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-blue-500"
                        defaultValue="Not sure"
                      >
                        <option>Below ₹5 Lakhs</option>
                        <option>₹5–10 Lakhs</option>
                        <option>₹10–25 Lakhs</option>
                        <option>₹25 Lakhs +</option>
                        <option>Not sure</option>
                      </select>
                    </label>

                    <label className="block text-sm font-semibold text-gray-700">
                      Expected Timeline
                      <select
                        name="timeline"
                        className="mt-2 w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-blue-500"
                        defaultValue="Within 30 days"
                      >
                        <option>Within 30 days</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>Just exploring</option>
                      </select>
                    </label>
                  </div>
                </div>

                {/* UPLOAD */}
                <div>

                  <label className="block mb-6 text-2xl md:text-3xl font-bold text-gray-900">
                    Upload Project Files
                  </label>

                  <div
                    className="
                      border-2 border-dashed
                      border-blue-300
                      rounded-[30px]
                      p-6 md:p-10
                      bg-gradient-to-br
                      from-blue-50
                      to-cyan-50
                    "
                  >

                    <div className="text-center">

                      <div
                        className="
                          w-20 h-20 mx-auto
                          rounded-full
                          bg-gradient-to-r
                          from-[#3B82F6]
                          to-[#2563EB]
                          text-white text-3xl
                          flex items-center justify-center
                          shadow-xl
                        "
                      >
                        <FaUpload />
                      </div>

                      <h3 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">
                        Drag & Drop Files
                      </h3>

                      <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                        Upload venue drawings, images and PDFs.
                      </p>

                    </div>

                    {/* FILE INPUTS */}
                    <div className="mt-8 grid md:grid-cols-2 gap-4">

                      {[1, 2, 3, 4].map((item) => (
                        <input
                          key={item}
                          type="file"
                          className="
                            w-full
                            bg-white
                            border border-gray-200
                            rounded-2xl
                            p-4
                          "
                        />
                      ))}

                    </div>

                  </div>
                </div>

                {/* CONSENT */}
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 md:p-6">
                  <label className="flex items-start gap-4 cursor-pointer text-sm md:text-base text-gray-700">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>
                      I confirm that the details provided are correct and I allow Eminent Audio Visual to contact me for this design request.
                    </span>
                  </label>
                </div>

                {/* STATUS */}
                {statusMessage && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm md:text-base ${
                      statusType === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* SUBMIT */}
                <div className="text-center pt-2">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group
                      inline-flex items-center gap-4
                      px-8 md:px-12 py-5 rounded-2xl
                      bg-gradient-to-r
                      from-[#3B82F6]
                      to-[#2563EB]
                      text-white text-base md:text-lg font-bold
                      shadow-[0_15px_40px_rgba(37,99,235,0.4)]
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    {isSubmitting ? "Sending request..." : "Submit Design Request"}

                    <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                  </button>

                </div>

              </form>

            </div>

          </motion.div>

        </div>

      </section>
    </div>
  );
};

export default DesignRequest;                                   