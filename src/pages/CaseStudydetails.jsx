import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <-- SEO ke liye add kiya

const caseStudies = [
  {
    id: "concert",
    title: "Concert Audio Setup",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    details:
      "This project involved setting up a complete concert sound system using high-performance speakers, mixers, and amplifiers. The system delivered crystal-clear sound to a large audience.",
  },
  {
    id: "hotel",
    title: "Hotel Sound Installation",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    details:
      "We installed a multi-zone background music system across hotel lobbies, rooms, and restaurants ensuring smooth and pleasant audio experience.",
  },
  {
    id: "mall",
    title: "Mall Announcement System",
    img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
    details:
      "A centralized announcement and music system was designed for seamless communication and entertainment across all areas of the mall.",
  },
  {
    id: "office",
    title: "Office Conference Setup",
    img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
    details:
      "A centralized announcement and music system was designed for seamless communication and entertainment across all areas of the mall.",
  },
  {
    id: "restaurant",
    title: "Restaurant Audio System",
    img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
    details:
      "A centralized announcement and music system was designed for seamless communication and entertainment across all areas of the mall.",
  },
  {
    id: "dj-night",
    title: "DJ Night Setup",
    img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
    details:
      "A centralized announcement and music system was designed for seamless communication and entertainment across all areas of the mall.",
  },
];

const CaseStudyDetails = () => {
  const { id } = useParams();

  const study = caseStudies.find((item) => item.id === id);

  if (!study) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Case Study Not Found</h1>
      </div>
    );
  }

  return (
    <>
      {/* SEO META TAGS - DYNAMIC FOR EACH CASE STUDY */}
      <Helmet>
        <title>{study.title} | Case Study - Eminent Audio Visual</title>
        <meta name="description" content={study.details} />
      </Helmet>

      <div 
        className="bg-gray-100 py-10 px-4 min-h-screen"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }} // <-- SPEED OPTIMIZATION
      >
        <div className="w-full max-w-5xl mx-auto bg-white overflow-hidden shadow-lg rounded-xl">
          {/* Main Hero Image */}
          <img
            src={study.img}
            alt={study.title}
            loading="eager" // <-- SPEED OPTIMIZATION (Load Fast)
            fetchpriority="high" // <-- SPEED OPTIMIZATION (Top Priority)
            decoding="async" // <-- SPEED OPTIMIZATION (Smooth processing)
            className="w-full h-80 object-cover"
          />

          {/* Content */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{study.title}</h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">{study.details}</p>

            {/* Back Button (Commented jaisa aapne rakha tha) */}
            {/* <Link
              to="/casestudy"
              className="inline-block px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              ← Back to Case Studies
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetails;