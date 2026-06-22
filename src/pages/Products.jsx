import React from "react";

const Products = () => {
  const productCategories = [
    {
      title: "Home Theatre & Hi-fi",
      description: "Transform your home entertainment experience with our premium home theatre and hi-fi solutions.",
      products: [
        { name: "Elipson Speakers", description: "Premium French audio speakers" },
        { name: "Norstone Stands", description: "High-quality speaker stands" },
        { name: "Amplifiers", description: "Professional grade amplifiers" },
        { name: "Subwoofers", description: "Deep bass solutions" },
      ],
      icon: "🎵",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Music & Recording",
      description: "Professional studio equipment for musicians, producers, and recording engineers.",
      products: [
        { name: "Apogee Interfaces", description: "Professional audio interfaces" },
        { name: "Beyerdynamic Mics", description: "Studio quality microphones" },
        { name: "Black Lion Audio", description: "Audio processing equipment" },
        { name: "Studio Monitors", description: "Reference monitoring systems" },
      ],
      icon: "🎤",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Pro Audio & Visual",
      description: "Commercial and professional audio-visual solutions for venues and events.",
      products: [
        { name: "EAW Speakers", description: "Professional sound systems" },
        { name: "Beyma Drivers", description: "High-performance drivers" },
        { name: "ClockAudio", description: "Audio processing solutions" },
        { name: "Work Pro", description: "Professional workstations" },
      ],
      icon: "🎧",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional audio and video equipment
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-16">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`h-64 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                <div className="text-white text-8xl">{category.icon}</div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-8 text-lg">{category.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Explore All {category.title} Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elipson Planet L", price: "₹45,000", image: "🔊" },
              { name: "Beyerdynamic DT 770", price: "₹12,000", image: "🎧" },
              { name: "Apogee Duet", price: "₹85,000", image: "🎛️" },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-6">
            Our team of experts can help you find the perfect audio solution for your specific needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products; 