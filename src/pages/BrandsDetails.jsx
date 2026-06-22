import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHeadphones,
  FaBroadcastTower,
  FaVolumeUp,
} from "react-icons/fa";

// Louis Martin Products Images
import linearray from "../assets/famouf.JPG";
import pointsource from "../assets/redfront.JPG";
import column from "../assets/kff302.JPEG";
import commercial from "../assets/dsf15.JPG";
import subwoofer from "../assets/ksf218.JPG";
import electronics from "../assets/plf4.jpg";

// Amate Products Images
import xcellence from "../assets/brand/Xcellence.jpg";
import nitid1 from "../assets/brand/Nitid1.jpg";
import elctronic from "../assets/brand/electronic.jpg";
import dsp4 from "../assets/brand/dsp4.jpg";
import louismartin from "../assets/brand/louismartin.PNG"; // Louis Martin ke liye hero image

// Hero Section Background Images
import amate1 from "../assets/brand/amate1.png";

const brandProducts = {
  amate: [
    {
      name: "Xcellence Series",
      img: xcellence,
      desc: `Xcellence is the response of Amate Audio to the challenge of creating high-end products, delivering our passion for exceptional sound with uncompromising performance.

Xcellence combines the latest technologies, meticulous attention to detail, and user-friendly design to meet the demands of the most professional audio applications with truly Xcellent performance.`,
    },
    {
      name: "Nítid-S Series",
      img: nitid1,
      desc: `Nítid, derived from the Latin words nitidus meaning bright, clear, and lustrous, and nitere meaning to shine, was launched in 2017 to celebrate 45 years of Amate Audio innovation.

The Nítid speaker series combines advanced acoustic engineering with the latest digital amplification and processing technologies to deliver exceptional audio performance from ultra-compact speaker systems.`,
    },
    {
      name: "Electronics",
      img: elctronic,
      desc: `Amate Audio’s advanced outboard electronics include state-of-the-art Class-D power amplifiers engineered for exceptional power-to-weight performance and superior sonic quality.

Since introducing the world’s first power amplifiers with onboard limiting in 1985, Amate Audio has remained a pioneer in processing amplifiers, delivering integrated power, advanced control capabilities, and switched-mode power supply technology for passive reinforcement systems.`,
    },
    {
      name: "DSP4 Software",
      img: dsp4,
      desc: `DSP Studio delivers an intuitive and modern platform for seamless audio system configuration, tuning, and live control. Designed for both Windows and MAC OS, it offers touchscreen support, auto-detection, and flexible cabinet management.

With real-time monitoring, advanced EQ tuning, delay control, and detailed system feedback, DSP Studio provides complete precision and flexibility for professional sound environments.`,
    },
  ],

  louismartin: [
    {
      name: "Line Array",
      img: linearray,
      desc: "Our Line Array Systems are meticulously designed to provide consistent and even sound coverage across large areas. With features like Uniform Sound Distribution, Controlled Dispersion, and High Output Levels, they ensure exceptional audio clarity and quality. These systems are the perfect solution for concerts, conferences, and other events where reliable and immersive sound is essential.",
    },
    {
      name: "Point Source",
      img: pointsource,
      desc: "Experience Pure Sound with Our Point Source Loudspeaker. Our point source loudspeaker is designed in such a way that minimises distortion and phase issues and gives crystal-clear audio with precise sound reproduction, ensuring every note and beat is delivered with exceptional fidelity.",
    },
    {
      name: "Column Speaker",
      img: column,
      desc: "Our column speakers are meticulously engineered to enhance speech intelligibility and fidelity in environments where these attributes are paramount. Their sleek and vertical design not only ensures aesthetic appeal but also makes them highly functional for spaces such as airports, churches, and educational institutions.",
    },
    {
      name: "Commercial Speaker",
      img: commercial,
      desc: "This series is engineered to endure rigorous use and harsh environments, ensuring long-lasting performance with an IP54 rating. These systems are meticulously designed to deliver clear, high-fidelity audio, making them ideal for music reproduction, announcements, stadium & sports complexes.",
    },
    {
      name: "Subwoofer",
      img: subwoofer,
      desc: "Our subwoofers are equipped with state-of-the-art high-excursion drivers, ensuring the delivery of deep and precise bass. The robust construction and exceptional durability guarantee high-quality deep subwoofer performance for many years.",
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

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-4 md:px-6 overflow-hidden">

        {/* DYNAMIC BACKGROUND IMAGE */}
        <img 
          src={heroImage} 
          alt={`${id} Audio Background`} 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay - Thoda dark kiya hai taaki text clear dikhe image ke upar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#050B18]"></div>

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/20 blur-[100px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-xs md:text-sm mb-4"
          >
          
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight capitalize"
          >
            {/* Yahan condition lagayi hai ki agar id 'louismartin' hai toh beech me space dekar "Louis Martin" likhe. Aur Audio wala word na dikhaye */}
            {id === "louismartin" ? "Louis Martin" : id}
            {id !== "louismartin" && <span> Audio</span>}
          </motion.h1>

          <p className="text-gray-300 mt-5 text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl mx-auto">
            Explore innovative professional audio solutions crafted for
            exceptional sound performance and immersive AV experiences.
          </p>

        </div>

      </section>

      {/* SERIES */}
      <section>

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
                min-h-screen
                flex
                items-center
                overflow-hidden
              "
            >

              {/* BG IMAGE */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  ${isColumnSpeaker ? "scale-[1.6] md:scale-[1.9]" : "scale-110"}
                `}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              ></div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* GLOW */}
              <div className="absolute top-1/2 left-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6">

                <div className="max-w-3xl">

                  <div className="flex items-center gap-3 text-blue-400 mb-5">

                    {/* <FaVolumeUp className="text-sm md:text-base" />

                    <span className="uppercase tracking-[3px] md:tracking-[4px] text-[10px] sm:text-xs md:text-sm">
                      Professional Audio Series
                    </span> */}

                  </div>

                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                    {item.name}
                  </h2>

                  <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-7 md:leading-9 mb-8 md:mb-10">
                    {item.desc}
                  </p>

                  {/* FEATURES */}
                  <div className="space-y-4 md:space-y-5 mb-10 md:mb-12">

                    <div className="flex items-center gap-3 md:gap-4 text-gray-200">

                      {/* <FaHeadphones className="text-blue-400 text-lg md:text-xl" /> */}

                      {/* <span className="text-sm sm:text-base md:text-lg">
                        Premium Sound Performance
                      </span> */}

                    </div>

                    <div className="flex items-center gap-3 md:gap-4 text-gray-200">

                      {/* <FaBroadcastTower className="text-blue-400 text-lg md:text-xl" />

                      <span className="text-sm sm:text-base md:text-lg">
                        Advanced Audio Engineering
                      </span> */}

                    </div>

                  </div>

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

              </div>

            </motion.section>
          );
        })}

      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-[#050B18]">

        <div
          className="
            max-w-2xl min-h-[120px]
            mx-auto
            flex items-center justify-center
          "
        >

          {/* <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
            Explore More From
            <span className="text-blue-400"> {id}</span>
          </h3> */}

          {/* <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8 mb-8 md:mb-10">
            Visit the official brand website to discover the complete range of
            premium professional audio products and technologies.
          </p> */}

          <a
            href={brandLinks[id]}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              px-7 md:px-10
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
            "
          >
            Visit Official Website
            <FaArrowRight />
          </a>

        </div>

      </section>

    </div>
  );
};

export default BrandProducts;
