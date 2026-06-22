import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
  return (
    <section className="py-16 bg-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          GET SOCIAL WITH US & STAY UP TO DATE!
        </h2>
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
            <FaFacebookF className="text-2xl" />
          </div>
          {/* Instagram */}
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
            <FaInstagram className="text-2xl" />
          </div>
          {/* Twitter/X */}
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
            <FaTwitter className="text-2xl" />
          </div>
          {/* LinkedIn */}
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
            <FaLinkedinIn className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
