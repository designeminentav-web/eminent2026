import { useParams, Link } from "react-router-dom";

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
    return <h1 className="text-center mt-10">Case Study Not Found</h1>;
  }

  return (
    <div className=" bg-gray-100 py-10 px-4">
      <div className="w-full mx-auto bg-white  overflow-hidden">
        {/* Image */}
        <img
          src={study.img}
          alt={study.title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{study.title}</h1>

          <p className="text-gray-600 leading-relaxed mb-6">{study.details}</p>

          {/* Back Button */}
          {/* <Link
            to="/casestudy"
            className="inline-block px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            ← Back to Case Studies
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
