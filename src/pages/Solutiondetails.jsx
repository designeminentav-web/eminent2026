import { useParams } from "react-router-dom";

const solutions = [
  {
    id: "sound-system",
    title: "Sound System Setup",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    details:
      "We provide complete sound system setups for concerts, events, and large venues with high-quality speakers and expert configuration.We provide complete sound system setups for concerts, events, and large venues with high-quality speakers and expert configuration.We provide complete sound system setups for concerts, events, and large venues with high-quality speakers and expert configuration.",
  },
  {
    id: "home-audio",
    title: "Home Audio Solution",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215",
    details:
      "Transform your home into a cinematic experience with our premium home audio solutions.",
  },
  {
    id: "commercial",
    title: "Commercial Audio",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    details:
      "We design and install commercial audio systems for malls, offices, and public spaces.",
  },
];

const SolutionDetails = () => {
  const { id } = useParams();

  const solution = solutions.find((item) => item.id === id);

  if (!solution) {
    return (
      <div className="min-h-screen bg-gray-100 px-4 py-16 text-center">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">Solution not found</h1>
          <p className="mt-4 text-gray-600">The requested solution page is unavailable. Please return to the solutions list and choose a valid option.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 py-10 px-4">
      <div className="w-full mx-auto bg-white  overflow-hidden">
        {/* Image */}
        <img
          src={solution.img}
          alt={solution.title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{solution.title}</h1>

          <p className="text-gray-600 leading-relaxed">{solution.details}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetails;
