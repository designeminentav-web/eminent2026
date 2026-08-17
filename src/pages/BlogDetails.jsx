import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import { blogs } from "../data/blogData.jsx";

// IMAGES
import pune from "../assets/new/pune.JPG"; 
import chennai2026 from "../assets/new/chennai2026.jpg";
import palm2026 from "../assets/new/palm2026.JPG";
import pune1 from "../assets/new/pune1.JPG";
import pune2 from "../assets/new/pune2.JPG";
import pune3 from "../assets/new/pune3.JPG";
import palm1 from "../assets/new/palm1.JPG";
import palm2 from "../assets/new/palm2.JPG";
import palm3 from "../assets/new/palm3.JPG";
import chennai1 from "../assets/new/chennai1.jpeg";
import chennai2 from "../assets/new/chennai2.jpeg";
import chennai3 from "../assets/new/chennai3.jpeg";

// NAYA BLOG: IMAGE IMPORTS
import eav10 from "../assets/new/eav10.JPG"; 
import eav1 from "../assets/new/eav1.JPG"; 
import eav2 from "../assets/new/eav2.JPG";
import eav3 from "../assets/new/eav3.JPG";

import demopune1 from "../assets/new/demopune1.JPG";
import demopune2 from "../assets/new/demopune2.JPG";
import demopune3 from "../assets/new/demopune3.JPG";
import demopune4 from "../assets/new/demopune4.JPG";

import t1 from "../assets/new/t1.jpg";
import t2 from "../assets/new/t2.jpg";
import t3 from "../assets/new/t3.jpg";
import t4 from "../assets/new/t4.jpg";



import proae from "../assets/new/proae.jpeg";
import proae1 from "../assets/new/proae1.jpeg";
import proae2 from "../assets/new/proae2.jpg";
import proae3 from "../assets/new/proae3.jpeg";



const BlogDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  // ==========================================
  // IMAGE MAP & LOGIC (Memoized to prevent re-renders)
  // ==========================================
  const allImages = useMemo(() => {
    if (!blog) return [null, null, null, null];

    const blogImagesMap = {
      "audio-solutions-expo-2025": [pune, pune1, pune2, pune3],
      "pro-audio-brand-award": [palm2026, palm1, palm2, palm3],
      "line-array-vs-column-array": [chennai2026, chennai1, chennai2, chennai3],
      "celebrating-10-years": [eav3,eav2, eav1,eav10 ],
      "palm-expo-2025": [chennai3,],
      "pune-event-2025": [demopune2,demopune1,demopune3,demopune4],
      "gujrat-demo": [t1,t2,t3,t4],
      "prowave-expo-hyderabad-2026":[demopune2,demopune1,demopune3,demopune4],
      "proae Show-ahmedabad-2026": [ proae, proae1,proae2,proae3]

      
      
      // URL slug mein generally spaces nahi hote
    };

    let fetchedImages = [];

    // 1. Agar direct images exist karti hain data mein
    if (blog?.images?.length > 0) {
      fetchedImages = blog.images;
    } 
    // 2. Agar map mein hain
    else if (blogImagesMap[blog.slug]) {
      fetchedImages = blogImagesMap[blog.slug];
    } 
    // 3. Sirf single image hai
    else if (blog.image) {
      fetchedImages = [blog.image];
    }

    // Force array to always have exactly 4 items (Main + 3 Gallery).
    // Jo image nahi hogi, uski jagah 'null' aayega (Blank div ke liye)
    return [
      fetchedImages[0] || null,
      fetchedImages[1] || null,
      fetchedImages[2] || null,
      fetchedImages[3] || null,
    ];
  }, [blog]);

  const mainImage = allImages[0];
  const galleryImages = allImages.slice(1, 4);

  // ==========================================
  // LOADING STATE
  // ==========================================
  const [isLoading, setIsLoading] = useState(true);

  // ==========================================
  // SCROLL TO TOP & REAL IMAGE PRELOADING
  // ==========================================
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    if (!blog) {
      setIsLoading(false);
      return;
    }

    // Sirf wahi images load karo jo null nahi hain
    const imagesToLoad = allImages.filter(Boolean);

    if (imagesToLoad.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imagesToLoad.length) {
        setIsLoading(false);
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(fallbackTimer);
  }, [slug, blog, allImages]);


  // ==========================================
  // LOADER UI
  // ==========================================
  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#050B18]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-blue-500"></div>
          <p className="text-sm tracking-widest text-blue-400 animate-pulse">LOADING CONTENT...</p>
        </div>
      </section>
    );
  }

  // Agar blog nahi milta
  if (!blog) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#050B18] px-4 py-24 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[4px] text-blue-400">Blog Not Found</p>
          <h1 className="mt-4 text-3xl font-semibold">This article is not available right now.</h1>
          <button
            onClick={() => navigate("/blogs")}
            className="mt-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Back to Blogs
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{blog.title} | Eminent Audio Visual</title>
        <meta 
          name="description" 
          content={blog.intro || "Read our latest article and updates at Eminent Audio Visual."} 
        />
      </Helmet>

      <section className="min-h-screen bg-[#050B18] px-4 py-20 md:px-6 md:py-32 animate-in fade-in duration-700">
        <div className="mx-auto max-w-7xl">
          
          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* ======================= */}
            {/* LEFT SIDE : IMAGES AREA */}
            {/* ======================= */}
            <div className="lg:col-span-5 xl:col-span-6">
              <div className="sticky top-32 flex flex-col gap-4 md:gap-6">
                
                {/* Main Big Image */}
                <div className="group relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-2xl">
                  {mainImage ? (
                    <>
                      <img
                        src={mainImage}
                        alt={blog.title}
                        loading="eager" 
                        fetchpriority="high"
                        className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[450px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    </>
                  ) : (
                    // Blank div agar Main Image na ho
                    <div className="h-[300px] w-full bg-white/[0.01] md:h-[450px]"></div>
                  )}
                </div>

                {/* Remaining 3 Images Grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02] shadow-lg ${
                        index === 2 ? "col-span-2" : "col-span-1"
                      }`}
                    >
                      {img ? (
                        <img
                          src={img}
                          alt={`Gallery ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-100"
                        />
                      ) : (
                        // Blank div agar Gallery Image na ho
                        <div className="h-50 w-full bg-white/[0.01] sm:h-100"></div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ======================= */}
            {/* RIGHT SIDE : TEXT AREA  */}
            {/* ======================= */}
            <div 
              className="flex flex-col justify-center lg:col-span-7 xl:col-span-6"
              style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1000px" }}
            >
              <div className="rounded-[32px] border border-white/5 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
                
                {/* Category & Meta */}
                <div className="mb-6 flex flex-col items-start gap-4 border-b border-white/10 pb-6">
                  <span className="rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-blue-400 border border-blue-500/20">
                    {blog.category || "Article"}
                  </span>
                  
                  <h1 className="text-xl font-extrabold leading-tight text-white sm:text-4xl lg:text-2xl">
                    {blog.title}
                  </h1>
                  
                  <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                    <span>{blog.date}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Intro Text */}
                {blog.intro && (
                  <p className="mb-8 text-lg font-medium leading-relaxed text-blue-100/90 sm:text-xl">
                    {blog.intro}
                  </p>
                )}

                {/* Main Content Paragraphs */}
                <div className="space-y-6 text-gray-300">
                  {blog.content?.map((para, index) => (
                    <p key={index} className="text-base leading-8 sm:text-lg">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row">
                  <button
                    onClick={() => navigate("/blogs")}
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/30 sm:w-auto"
                  >
                    &larr; Back to Blogs
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="w-full rounded-full border border-white/20 bg-white/[0.03] px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
                  >
                    Go to Home
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;