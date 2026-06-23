import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaHeadphones,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  
  // Loading state add kiya gaya hai
  const [isLoading, setIsLoading] = useState(false);

  // Link click handle karne ka function
  const handleNavigate = (e, path) => {
    e.preventDefault(); // Default link behavior ko rokna
    setIsLoading(true); // Loader dikhana
    
    // Page ko turant top par scroll karna
    window.scrollTo(0, 0);

    // Thodi der baad naye page par bhejna taaki upar jane ka effect hide ho jaye
    setTimeout(() => {
      navigate(path);
      setIsLoading(false); // Loader hatana
    }, 600); // 600ms ka loading timer
  };

  return (
    <>
      {/* ================= LOADING OVERLAY ================= */}
      {/* Jab koi link click karega tab ye full screen loader dikhega */}
      {isLoading && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050B18]">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-blue-500"></div>
            <p className="text-sm tracking-widest text-blue-400 animate-pulse">LOADING...</p>
          </div>
        </div>
      )}

      <footer className="relative bg-gradient-to-br from-[#040B1A] via-[#07152D] to-[#0B1F40] text-gray-300 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10">

          {/* ================= TOP CONTENT ================= */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

              {/* ================= COMPANY ================= */}
              <div>

                <div className="mb-6">
                  <img src={logo2} alt="Eminent Logo" />
                </div>

                <p className="text-sm text-gray-400 leading-7 mb-6">
                  Premium professional audio visual solutions for auditoriums,
                  clubs, conference rooms and large venues.
                </p>

                {/* Social */}
                <div className="flex gap-3">

                  {[
                    {
                      icon: FaFacebookF,
                      link: "https://www.facebook.com/share/17paof2gTU/",
                    },
                    {
                      icon: FaInstagram,
                      link: "https://www.instagram.com/eminentaudiovisual?igsh=Z3lyczM3Y3ozOWN1",
                    },
                    {
                      icon: FaLinkedinIn,
                      link: "https://www.linkedin.com/company/eminentav/",
                    },
                    {
                      icon: FaYoutube,
                      link: "https://www.youtube.com/channel/UC79_GmfnrsaEkDQFGwh07zg",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group
                          w-10 h-10 rounded-xl
                          bg-white/5 border border-white/10
                          flex items-center justify-center
                          hover:bg-blue-500 hover:border-blue-500
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        <Icon className="group-hover:scale-110 transition duration-300" />
                      </a>
                    );
                  })}

                </div>

              </div>

              {/* ================= QUICK LINKS ================= */}
              <div>

                <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FaBuilding />
                  </div>

                  Quick Links
                </h3>

                <ul className="space-y-3">

                  {[
                    {
                      name: "About Us",
                      path: "/about",
                    },
                    {
                      name: "Our Brands",
                      path: "/brands/amate",
                    },
                    {
                      name: "Solutions",
                      path: "/solutions/auditoriums",
                    },
                    {
                      name: "Case Study",
                      path: "/casestudy",
                    },
                    {
                      name: "Contact Us",
                      path: "/contact",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavigate(e, item.path)}
                        className="
                          group flex items-center gap-2
                          text-sm text-gray-400
                          hover:text-blue-400
                          transition duration-300
                        "
                      >
                        <FaChevronRight className="text-[10px] text-blue-500 group-hover:translate-x-1 transition duration-300" />

                        {item.name}
                      </Link>
                    </li>
                  ))}

                </ul>

              </div>

              {/* ================= SOLUTIONS ================= */}
              <div>

                <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FaHeadphones />
                  </div>

                  Solutions
                </h3>

                <ul className="space-y-3">

                  {[
                    {
                      name: "Auditoriums",
                      path: "/solutions/auditoriums",
                    },
                    {
                      name: "Conference Rooms",
                      path: "/solutions/conference-room",
                    },
                    {
                      name: "Live Events",
                      path: "/solutions/live-events",
                    },
                    {
                      name: "Night Clubs",
                      path: "/solutions/night-clubs",
                    },
                    {
                      name: "Retail Outlets",
                      path: "/solutions/retail-outlet",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavigate(e, item.path)}
                        className="
                          group flex items-center gap-2
                          text-sm text-gray-400
                          hover:text-blue-400
                          transition duration-300
                        "
                      >
                        <FaChevronRight className="text-[10px] text-blue-500 group-hover:translate-x-1 transition duration-300" />

                        {item.name}
                      </Link>
                    </li>
                  ))}

                </ul>

              </div>

              {/* ================= CONTACT ================= */}
              <div>

                <h3 className="text-lg font-semibold text-white mb-5">
                  Contact Info
                </h3>

                <div className="space-y-4">

                  {/* Address */}
                  <div className="flex gap-3 items-start">

                    <div className="min-w-[42px] h-[42px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <FaMapMarkerAlt />
                    </div>

                    <p className="text-sm text-gray-400 leading-6">
                      WZ-572/J, Ground Floor,
                      Naraina Village, New Delhi - 110028
                    </p>

                  </div>

                  {/* Email */}
                  <div className="flex gap-3 items-center">

                    <div className="min-w-[42px] h-[42px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <FaEnvelope />
                    </div>

                    <a
                      href="mailto:info@eminentav.in"
                      className="text-sm text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                      info@eminentav.in
                    </a>

                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 items-center">

                    <div className="min-w-[42px] h-[42px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <FaPhoneAlt />
                    </div>

                    <a
                      href="tel:+91 1171068221"
                      className="text-sm text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                      +91 1171068221
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= FULL WIDTH MAP ================= */}
          <div className="w-full pb-10">

            <div
              className="
                overflow-hidden
                border-y border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                relative
              "
            >

              {/* MAP */}
              <iframe
                title="Eminent Audio Visual Location"
                src="https://maps.google.com/maps?q=Eminent%20Audio%20Visual%20Naraina%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  w-full
                  h-[260px]
                  md:h-[450px]
                  border-0
                "
              ></iframe>

              {/* MAP CARD */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  bg-[#07152D]/90
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-5
                  max-w-[320px]
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                "
              >

                <h3 className="text-white text-xl font-bold mb-2">
                  Eminent Audio Visual
                </h3>

                <p className="text-gray-300 text-sm leading-6 mb-4">
                  WZ-572/J, Ground Floor,
                  Naraina Village,
                  New Delhi - 110028
                </p>

                <a
                  href="https://maps.google.com/?q=Eminent Audio Visual Naraina New Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-2.5
                    rounded-full
                    bg-gradient-to-r
                    from-[#2563EB]
                    to-black
                    text-white
                    text-sm
                    font-semibold
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Open In Google Maps
                </a>

              </div>

            </div>

          </div>

          {/* ================= BOTTOM ================= */}
          <div className="border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-sm text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} Eminent Audio Visual.
                All Rights Reserved.
              </p>

              <div className="flex gap-6 text-sm">

                <Link
                  to="/privacy-policy"
                  onClick={(e) => handleNavigate(e, "/privacy-policy")}
                  className="text-gray-500 hover:text-blue-400 transition duration-300"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  onClick={(e) => handleNavigate(e, "/terms")}
                  className="text-gray-500 hover:text-blue-400 transition duration-300"
                >
                  Terms & Conditions
                </Link>

              </div>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;