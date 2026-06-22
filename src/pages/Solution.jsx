// import { Link } from "react-router-dom";

// const solutions = [
//   {
//     id: "sound-system",
//     title: "Sound System Setup",
//     desc: "Professional audio solutions for events, concerts & installations.",
//     img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
//     details:
//       "We provide complete sound system setups for concerts, events, and large venues with high-quality speakers and expert configuration.",
//   },
//   {
//     id: "home-audio",
//     title: "Home Audio Solution",
//     desc: "Premium sound experience for your home & personal space.",
//     img: "https://images.unsplash.com/photo-1580894908361-967195033215",
//     details:
//       "Transform your home into a cinematic experience with our premium home audio solutions tailored for comfort and quality.",
//   },
//   {
//     id: "commercial",
//     title: "Commercial Audio",
//     desc: "Audio systems for malls, offices, and public places.",
//     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//     details:
//       "We design and install commercial audio systems for malls, offices, and public spaces with clear and consistent sound coverage.",
//   },
// ];

// const Solutions = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#050B18_0%,#07111F_45%,#09182B_100%)] px-4 py-16 md:px-6 md:py-24">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
//           <p className="mb-4 text-xs uppercase tracking-[4px] text-blue-300 md:text-sm">
//             Crafted Solutions
//           </p>
//           <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
//             Solutions designed with <span className="text-blue-400">purpose</span>
//           </h1>
//           <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 md:w-24" />
//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300 md:text-lg md:leading-8">
//             Every space has its own rhythm. We create audio experiences that feel natural, premium, and built for real-world use.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {solutions.map((item, index) => (
//             <Link
//               to={`/solutions/${item.id}`}
//               key={item.id}
//               className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.06]"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 md:h-72"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

//               <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
//                 <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[3px] text-blue-100 backdrop-blur-md">
//                   {index === 0 ? "Live Events" : index === 1 ? "Home Setup" : "Commercial Spaces"}
//                 </span>
//                 <h2 className="text-2xl font-semibold tracking-tight text-white md:text-[1.55rem]">
//                   {item.title}
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-gray-200 md:text-[0.95rem]">
//                   {item.desc}
//                 </p>

//                 <div className="mt-5 flex items-center justify-between text-sm text-blue-100">
//                   <span className="font-medium tracking-wide">Explore solution</span>
//                   <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-base transition group-hover:translate-x-1 group-hover:bg-blue-500/20">
//                     →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;
