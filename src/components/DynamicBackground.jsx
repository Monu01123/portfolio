import React from "react";
import { motion } from "framer-motion";

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-b from-[#1a0500] to-black">
      {/* Ambient Moving Light 1 */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-creative-orange blur-[120px] opacity-40"
      />

      {/* Ambient Moving Light 2 */}
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-creative-red blur-[140px] opacity-40"
      />

       {/* Ambient Moving Light 3 (Center) - Red Pulse */}
       <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#550000] blur-[150px] opacity-30"
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default DynamicBackground;
