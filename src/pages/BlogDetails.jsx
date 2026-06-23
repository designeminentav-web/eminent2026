import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const BlogDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  // ==========================================
  // IMAGE MAP & LOGIC (Memoized to prevent re-renders)
  // ==========================================
  const allImages = useMemo(() => {
    if (!blog) return [];

    const blogImagesMap = {
      "audio-solutions-expo-2025": [pune, pune1, pune2, pune3],
      "pro-audio-brand-award": [palm2026, palm1, palm2, palm3],
      "line-array-vs-column-array": [chennai2026, chennai1, chennai2, chennai3],
    };

    const fallbackImages = [
      blog.image || pune,
      "https://images.unsplash.com/photo-1493225457124-a1a2a5fa5034?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
    ];

    return blog?.images?.length >= 3 
      ? blog.images 
      : (blogImagesMap[blog.slug] || fallbackImages);
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

    if (!blog || allImages.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    // Filter out any undefined/null images just in case
    const imagesToLoad = allImages.filter(Boolean);

    const handleImageLoad = () => {
      loadedCount++;
      // Jab saari images memory me load ho jayen, tabhi loader hatao
      if (loadedCount === imagesToLoad.length) {
        setIsLoading(false);
      }
    };

    // Har image ko browser cache me silently load karna
    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Agar koi image tuti ho, tab bhi aage badho
    });

    // Fallback Timer: Agar internet bahut slow ho to max 4 seconds baad force-open kar do
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
              {mainImage && (
                <div className="group relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-2xl">
                  <img
                    src={mainImage}
                    alt={blog.title}
                    // Yahan se loading="lazy" hata diya hai taaki pehli image turant dikhe
                    loading="eager" 
                    className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              )}

              {/* Remaining 3 Images Grid */}
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02] shadow-lg ${
                        galleryImages.length === 3 && index === 2 ? "col-span-2" : "col-span-1"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        loading="lazy"
                        className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-100"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ======================= */}
          {/* RIGHT SIDE : TEXT AREA  */}
          {/* ======================= */}
          <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-6">
            
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
                {blog.content.map((para, index) => (
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
                  ← Back to Blogs
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
  );
};

export default BlogDetails;