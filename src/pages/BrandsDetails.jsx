import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHeadphones,
  FaBroadcastTower,
  FaVolumeUp,
} from "react-icons/fa";

// Louis Martin Products Images
import linearray from "../assets/famouf.png";
import pointsource from "../assets/redfront.png";
import column from "../assets/kff302.png";
import commercial from "../assets/dsf15.png";
import subwoofer from "../assets/ksf218.png";
import electronics from "../assets/plf4.png";
import dsp444 from "../assets/brand/dsp444.png";

// Amate Products Images
import xcellence from "../assets/brand/Xcellence.png";
import nitid1 from "../assets/brand/Nitid1.png";
import elctronic from "../assets/brand/electronic.jpg";
import dsp4 from "../assets/brand/dsp4.png";
import louismartin from "../assets/brand/louismartin.png"; // Louis Martin ke liye hero image

// Hero Section Background Images
import amate1 from "../assets/brand/amate1.png";

const brandProducts = {
  amate: [
    {
  name: "XA211",
  img: xcellence,
  desc: `The XA211 is a high-end active loudspeaker from the Xcellence series, engineered for exceptional clarity, accuracy, and powerful performance. Featuring advanced audio technology, integrated DSP, and Dante™ networking, it delivers precise control, seamless system integration, and outstanding sound fidelity. Designed for demanding professional applications, the XA211 is an ideal solution for large-scale events, concerts, touring, rental companies, and premium installations where uncompromising performance and reliability are essential.`,
},
 {
  name: "X102FD",
  img: nitid1,
  desc: `The X102FD is a compact yet powerful point-source loudspeaker designed to deliver high-impact performance for medium to large-scale events. Despite its compact size, it delivers exceptional output, clarity, and wide coverage, making it a powerful and efficient alternative to line arrays. With advanced DSP and Dante™ audio networking, the X102FD offers flexible system integration, precise control, and reliable performance. Its compact, easy-to-handle design makes it an excellent choice for rental companies, live events, concerts, corporate shows, touring applications, large venues, and professional installations where powerful sound and easy deployment are essential.`,
},
    {
  name: "XW218",
  img: elctronic,
  desc: `The XW218 is a powerful and advanced subwoofer featuring dual 18-inch woofers with 4-inch long-excursion voice coils, 5000W of integrated amplification, advanced DSP with F.I.R. filters, and Dante™ networking. Designed for high-demand professional applications, it delivers deep, powerful bass with precise control and exceptional reliability. Integrated power and control, multiple presets, dedicated cardioid presets, overvoltage protection, and a durable Polyurea® finish make the XW218 an ideal solution for large-scale events, touring, and demanding sound reinforcement systems.`,
},
    {
  name: "TPD3K",
  img: dsp4,
  desc: `The TPD3K combines 3000W of powerful amplification with integrated DSP, Class D technology, and an enhanced analogue circuit design to deliver reliable and precise performance. Designed to drive larger speaker systems, TPD3K features optimized factory presets for the N218WP subwoofer and N15P/N15PR cabinets, ensuring seamless system integration, speaker protection, and exceptional sound quality for professional applications.`,
},
    {
  name: "DSP4",
  img: dsp444,
  desc: `DSP Studio is the ultimate control and management platform for Amate Audio's Xcellence range, providing seamless configuration, tuning, monitoring, and live control of compatible Xcellence products. Designed for Windows and Mac OS, it offers touchscreen support, automatic device detection, flexible cabinet management, advanced EQ tuning, delay control, real-time monitoring, and detailed system feedback. With intuitive operation and precise control, DSP Studio makes it easy to configure and optimize Xcellence systems for professional sound environments.`,
},
    
  ],

  louismartin: [
    {
  name: "QS 80",
  img: linearray,
  desc: `The QS-80 is a next-generation line array designed for high-performance touring, rental applications, and premium fixed installations. Featuring dual 12-inch neodymium LF drivers and two 3-inch HF compression drivers, it delivers powerful output, exceptional clarity, and controlled sound coverage. With enhanced acoustics, upgraded LF power, and a durable Polyurea® finish, the QS-80 is built for demanding professional applications including outdoor events, live performances, theaters, auditoriums, concerts, and large-scale sound reinforcement.`,
},
    {
  name: "Cox 12",
  img: pointsource,
  desc: `The Cox 12 is a high-performance and versatile passive line array loudspeaker featuring a powerful 12-inch coaxial driver with a 1.5-inch HF driver. Designed for clear, accurate, and consistent sound reproduction, its two-way full-range configuration makes it an ideal choice for rental applications and high-end installations. Perfect for live events, auditoriums, theaters, convention centers, stadiums, sports complexes, nightclubs, and multipurpose venues, the Cox 12 delivers powerful performance with exceptional clarity and reliability.`,
},
   {
  name: " RED 10",
  img: column,
  desc: `The RED 10 is a powerful and versatile passive two-way loudspeaker, featuring dual 10-inch low-frequency drivers and a 1.75-inch compression driver for high-output, detailed, and balanced sound reproduction. Designed for professional live sound and installation applications, it delivers excellent clarity, strong low-frequency performance, and reliable coverage. The RED 10 is an ideal choice for live performances, concerts, main FoH systems, nightclubs, places of worship, auditoriums, and other demanding venues where powerful and consistent sound is essential.`,
},
    {
  name: "K306",
  img: commercial,
  desc: `The K306 is a slim and high-performance installation loudspeaker featuring six 3-inch FaitalPRO full-range drivers housed in a premium aluminium alloy enclosure. Designed for exceptional vocal clarity, detailed sound reproduction, and minimal distortion, it delivers consistent and reliable performance in demanding environments. Its sleek design makes it ideal for public address systems, airports, railway stations, lecture theatres, classrooms, churches, stadiums, and other large venues where clear and intelligible audio is essential.`,
},
    {
  name: "KS218",
  img: subwoofer,
  desc: `The KS218 is a high-performance passive subwoofer featuring a powerful European driver in a precision-engineered bandpass ported enclosure. Built with robust birch plywood construction, it delivers deep, powerful, and accurate bass with excellent durability and acoustic performance. Designed for both rental and fixed-installation applications, the KS218 is an ideal solution for live events, auditoriums, multifunctional halls, nightclubs, stadiums, sports complexes, and other demanding professional sound environments.`,
},
    {
      name: "Electronics",
      img: electronics,
      desc: "PWe offer amplifiers tailored for a variety of applications, from live concerts to installations. Each amplifier is meticulously designed with high-quality components, ensuring exceptional dynamic power and long-term reliability. Our commitment to precision engineering guarantees superior performance and sustainability over many years.",
    },
  ],
};

const brandLinks = {
  amate : "https://www.amateaudio.com",
  louismartin: "https://www.louismartinaudio.com/",
};

// Yeh object decide karega ki kis brand par kaunsi hero image dikhani hai
const brandHeroImages = {
  amate: amate1,
  louismartin: louismartin, 
};

const BrandProducts = () => {

  const { id } = useParams();
  const products = brandProducts[id];
  const heroImage = brandHeroImages[id]; // Brand ke hisaab se image select hogi

  if (!products) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#071028] text-white text-3xl font-semibold">
        Brand Not Found
      </div>
    );
  }

  // Format the brand name for Title and Display
  const brandNameFormatted = id === "louismartin" ? "Louis Martin" : "Amate Audio";

  // SEO: brand + har product ke naam se dynamically keywords bante hain
  const productNames = products.map((p) => p.name);
  const seoDescription = `Explore the premium professional audio solutions from ${brandNameFormatted}, including ${productNames.join(", ")}. Official ${brandNameFormatted} distributor in India for high-performance sound systems and technologies.`;
  const seoKeywords = [
    brandNameFormatted,
    `${brandNameFormatted} India`,
    `${brandNameFormatted} Distributor in India`,
    `${brandNameFormatted} dealer India`,
    `${brandNameFormatted} price in India`,
    // Product-first patterns - jaise log actually search karte hain
    ...productNames.map((n) => `${n} ${brandNameFormatted} speaker`),
    ...productNames.map((n) => `${n} ${brandNameFormatted}`),
    ...productNames.map((n) => `${brandNameFormatted} ${n} speaker`),
    ...productNames.map((n) => `${n} speaker price in India`),
    ...productNames.map((n) => `${n} speaker India`),
    ...productNames.map((n) => `${n} ${brandNameFormatted} price`),
    ...productNames,
    "professional audio systems",
    "speakers India",
    "amplifiers India",
    "sound systems India",
    "Eminent Audio Visual",
  ].join(", ");

  return (
    <>
      {/* DYNAMIC SEO META TAGS - React 19 native, auto-hoisted to <head> */}
      <title>{brandNameFormatted} Distributor in India | Eminent Audio Visual</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />

      {/* Open Graph tags - social share / search preview ke liye */}
      <meta property="og:title" content={`${brandNameFormatted} Distributor in India | Eminent Audio Visual`} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={heroImage} />
      <meta property="og:type" content="website" />

      <div 
        className="bg-black text-white overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1200px" }} // <-- SPEED OPTIMIZATION
      >

        {/* HERO */}
        <section className="relative min-h-[50vh] sm:min-h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-4 md:px-6 overflow-hidden">

          {/* DYNAMIC BACKGROUND IMAGE - SPEED OPTIMIZED */}
          <img 
            src={heroImage} 
            alt={`${brandNameFormatted} Background`} 
            loading="eager"
            fetchpriority="high" // <-- SPEED OPTIMIZATION: Load Fast
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay - Thoda dark kiya hai taaki text clear dikhe image ke upar */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#050B18]"></div>

          {/* Glow */}
          <div className="absolute top-0 left-0 w-[180px] sm:w-[250px] md:w-[400px] h-[180px] sm:h-[250px] md:h-[400px] bg-blue-500/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 max-w-4xl">

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight capitalize break-words"
            >
              {id === "louismartin" ? "Louis Martin" : id}
              {id !== "louismartin" && <span> Audio</span>}
            </motion.h1>

            <p className="text-gray-300 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 max-w-2xl mx-auto px-2">
              Explore innovative professional audio solutions crafted for
              exceptional sound performance and immersive AV experiences.
            </p>

          </div>

        </section>

        {/* SERIES - ek hi continuous gradient background, alag alag box nahi, gaps kam kiye */}
        <section className="relative bg-gradient-to-b from-[#050B18] via-[#0B1B34] to-[#050B18]">

          {products.map((item, index) => {
            // Check agar image Column Speaker ki hai toh usko bada dikhane ke liye condition
            const isColumnSpeaker = item.name === "Column Speaker";

            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="
                  relative
                  flex
                  items-center
                  overflow-hidden
                "
              >

                {/* GLOW */}
                <div className="absolute top-1/2 left-1/2 w-[180px] sm:w-[250px] md:w-[500px] h-[180px] sm:h-[250px] md:h-[500px] bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                {/* CONTENT WRAPPER - text left, image right (vertically centered together), gap kam kiya */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-8 md:py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 text-center md:text-left">

                  {/* TEXT */}
                  <div className="max-w-3xl w-full flex flex-col items-center md:items-start">

                    <div className="flex items-center gap-3 text-blue-400 mb-3 sm:mb-5">
                      {/* Placeholder for future icons/badges */}
                    </div>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                      {item.name}
                    </h2>

                    <p className="text-gray-200 text-sm sm:text-base md:text-xl leading-6 sm:leading-7 md:leading-9 mb-6 sm:mb-8 md:mb-6 whitespace-pre-line">
                      {item.desc}
                    </p>

                    {/* BUTTON CHANGED TO 'Know More' and linked to '/contact' */}
                    <Link
                      to="/contact"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        px-6 md:px-8
                        py-3 md:py-4
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-500
                        to-cyan-500
                        text-white
                        text-sm md:text-base
                        font-medium
                        shadow-2xl
                        hover:scale-105
                        transition duration-300
                      "
                    >
                      Know More
                      <FaArrowRight />
                    </Link>

                  </div>

                  {/* PRODUCT IMAGE - right side, vertically centered, bigger, NO box/frame - plain image */}
                  <motion.img
                    src={item.img}
                    alt={`${brandNameFormatted} ${item.name}`}
                    loading="lazy"
                    decoding="async" // <-- SPEED OPTIMIZATION: Process smoothly in background
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className={`
                      relative
                      flex-shrink-0
                      max-w-full
                      h-auto
                      object-contain
                      drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]
                      ${isColumnSpeaker
                        ? "w-56 sm:w-72 md:w-[24rem] lg:w-[28rem]"
                        : "w-48 sm:w-64 md:w-80 lg:w-[26rem]"}
                    `}
                  />

                </div>

              </motion.section>
            );
          })}

        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 md:py-24 px-4 md:px-6 bg-[#050B18]">

          <div
            className="
              max-w-2xl min-h-[100px] sm:min-h-[120px]
              mx-auto
              flex items-center justify-center
            "
          >
            <a
              href={brandLinks[id]}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                px-6 sm:px-7 md:px-10
                py-3 md:py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-500
                to-cyan-500
                text-white
                text-sm md:text-base
                font-medium
                shadow-xl
                hover:scale-105
                transition duration-300
                text-center
              "
            >
              Visit Official Website
              <FaArrowRight />
            </a>

          </div>

        </section>

      </div>
    </>
  );
};

export default BrandProducts;