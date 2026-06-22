import React from "react";
import {
  FaTruck,
  FaLightbulb,
  FaTools,
  FaHeadset,
  FaChalkboardTeacher,
  FaDraftingCompass,
  FaLandmark,
  FaBuilding,
  FaHotel,
  FaUniversity,
  FaTheaterMasks,
  FaHome,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Distribution",
      description:
        "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
      icon: <FaTruck className="text-blue-600" />,
      features: [
        "Wide network of authorized dealers",
        "Genuine product warranty",
        "After-sales support",
        "Technical training for partners",
      ],
    },
    {
      title: "Consulting",
      description:
        "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
      icon: <FaLightbulb className="text-yellow-500" />,
      features: [
        "System design consultation",
        "Acoustic analysis",
        "Budget optimization",
        "Technology recommendations",
      ],
    },
    {
      title: "Integration",
      description:
        "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
      icon: <FaTools className="text-green-600" />,
      features: [
        "Custom system integration",
        "Multi-platform compatibility",
        "Scalable solutions",
        "Future-proof technology",
      ],
    },
    {
      title: "Support",
      description:
        "We provide dedicated technical assistance to ensure smooth functioning of all installed systems.",
      icon: <FaHeadset className="text-red-500" />,
      features: [
        "24/7 technical support",
        "On-site maintenance",
        "Remote troubleshooting",
        "Preventive maintenance",
      ],
    },
    {
      title: "Training",
      description:
        "We provide hands-on training to ensure clients and teams can operate systems efficiently.",
      icon: <FaChalkboardTeacher className="text-purple-600" />,
      features: [
        "Product training programs",
        "System operation training",
        "Maintenance workshops",
        "Certification courses",
      ],
    },
    {
      title: "Design",
      description:
        "We create unique solutions which add value to a system through thoughtful and aesthetic design.",
      icon: <FaDraftingCompass className="text-pink-600" />,
      features: [
        "Custom audio system design",
        "Acoustic room design",
        "Visual design integration",
        "User experience optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive audio and video solutions tailored to your specific
            needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Government",
                icon: <FaLandmark className="text-blue-600" />,
                description: "Audio solutions for government institutions",
              },
              {
                name: "Corporate",
                icon: <FaBuilding className="text-gray-700" />,
                description: "Professional audio for corporate environments",
              },
              {
                name: "Hospitality",
                icon: <FaHotel className="text-yellow-600" />,
                description: "Audio systems for hotels and restaurants",
              },
              {
                name: "Education",
                icon: <FaUniversity className="text-purple-600" />,
                description:
                  "Audio-visual solutions for educational institutions",
              },
              {
                name: "Events",
                icon: <FaTheaterMasks className="text-pink-600" />,
                description: "Live event and performance audio systems",
              },
              {
                name: "Home & Hi-Fi",
                icon: <FaHome className="text-green-600" />,
                description: "Premium home audio and video systems",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
