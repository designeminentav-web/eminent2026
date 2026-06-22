"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import  mainslide4 from "../assets/hero/mainslide4.JPG";
import  mainslide5 from "../assets/hero/mainslide5.jpg";
import  mainslide3 from "../assets/hero/mainslide3.jpg";
import img2 from "../assets/hero/img2.jpg";
import img1 from "../assets/hero/img1.JPG";
import img6 from "../assets/hero/img6.jpeg";

const slides = [
  // {
  //   image: img1,
  //   title: "PROFESSIONAL AUDIO SOLUTIONS FOR EVERY SPACE",
  //   // subtitle: "Professional audio solutions for every industry",
  // },
   {
    image: img2,
    title: "PROFESSIONAL AUDIO FOR EVERY SPACE",
    // subtitle: "High-end audio solutions for discerning professionals",
  },
  {
    image: mainslide5,
    title: "HIGH-END STUDIO DESIGN & INSTALLATION",
    // subtitle: "High-fidelity systems for home & studio",
  },
  {
    image: img6,
    title: "AV INTREGRATION FOR EVERY INDUSTRY",
    // subtitle: "Pro tools for serious audio creators",
  },
   
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 z-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
            <div className="w-full h-full bg-black/60 flex items-center justify-center text-center px-4">
              <div className="text-white max-w-2xl space-y-4">
                <motion.h1
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-2xl sm:text-5xl font-bold">
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-lg sm:text-4xl">
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 text-white text-4xl hover:text-gray-300 transition">
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 text-white text-4xl hover:text-gray-300 transition">
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
