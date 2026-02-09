import React from "react";
import { motion } from "framer-motion";

import HeroImage from "./gh.png";

const Hero = () => {
  const highlights = [
    "Clean Code",
    "Scalable Systems",
    "Secure APIs",
    "Performance Optimization",
    "Cloud Deployment",
    "Problem Solving",
    "System Design",
    "Code Reviews",
    "Version Control",
    "Agile Development"
  ];

  return (
    <section id="home" className="relative w-full bg-transparent mb-20">
      {/* Hero Card Container */}
      <div className="w-full h-[100vh] bg-gradient-to-br from-creative-orange to-creative-red rounded-b-[40px] sm:rounded-b-[80px] relative flex flex-col justify-center px-6 sm:px-16 overflow-hidden">

        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

        {/* User Image - Absolute Center/Bottom Position - Maximized Size */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full z-10 pointer-events-none flex justify-center items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={HeroImage}
            alt="Profile"
            className="h-[120%] w-auto object-contain object-bottom drop-shadow-2xl opacity-100"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10 h-full">
          {/* Left Text Content - Z-Index Lower than Image for large text, Higher for buttons */}
          <div className="flex flex-col gap-4 pt-20 relative">
            <div className="flex items-center gap-2 text-white-100 font-medium tracking-wider uppercase text-sm relative z-20 mb-2">
              Hey, I'm
              <motion.div
                animate={{
                  boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.5)", "0px 0px 0px rgba(255,255,255,0)"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white/10 backdrop-blur-md border border-white/40 px-5 py-1.5 rounded-full"
              >
                <span className="text-white font-black text-xl tracking-normal drop-shadow-md bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Monu
                </span>
              </motion.div>
            </div>
            {/* Huge Text behind image - Floating Animation with 3D Effect */}
            <motion.h1
              animate={{
                y: [0, -20, 0],
                rotateX: [0, 10, 0],
                rotateY: [0, 5, 0],
                filter: [
                  "drop-shadow(0px 10px 10px rgba(0,0,0,0.3))",
                  "drop-shadow(0px 30px 20px rgba(0,0,0,0.5))",
                  "drop-shadow(0px 10px 10px rgba(0,0,0,0.3))"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="text-white font-black text-6xl sm:text-8xl leading-none relative z-0 opacity-90"
              style={{ transformPerspective: 1000 }}
            >
              Software <br />
              Developer
            </motion.h1>

            <div className="w-20 h-1 bg-white/40 my-6 rounded relative z-20" />

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-white/90 text-sm font-light mt-2 max-w-md relative z-20">
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-lg">#01</span>
                <span>Full-Stack Web Development</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-lg">#02</span>
                <span>Frontend Engineering</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-lg">#03</span>
                <span>Backend & API Development</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-lg">#04</span>
                <span>Problem Solving & DSA</span>
              </div>
            </div>

          </div>

          {/* Right Text Content - Floating */}
          <div className="hidden lg:flex flex-col items-end justify-center z-20 text-right h-full pb-20">
            <p className="text-white text-3xl font-bold leading-snug drop-shadow-md">
              Good code works  <br /> Great code lasts
            </p>
            <p className="text-white/80 mt-4 max-w-xs text-sm">
              I design and develop efficient systems with clean architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee / Trusted Brands Strip */}
      <div className="w-full py-10 bg-primary flex justify-center items-center overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">

          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white font-bold text-xl tracking-widest"
            >
              <div className="w-4 h-4 rounded-full border-2 border-white" />
              {item}
            </div>
          ))}

          {highlights.map((item, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center gap-2 text-white font-bold text-xl tracking-widest"
            >
              <div className="w-4 h-4 rounded-full border-2 border-white" />
              {item}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Hero;
