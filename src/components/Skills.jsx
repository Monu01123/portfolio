import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const skills = [
  // Frontend
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Redux", color: "#764ABC" },
  { name: "Zustand", color: "#000000" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Framer Motion", color: "#0055FF" },

  // Backend
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#000000" },
  { name: "MongoDB", color: "#47A248" },
  { name: "MySQL", color: "#4479A1" },

  // Programming
  { name: "C++", color: "#00599C" },
  { name: "Java", color: "#ED8B00" },

  // CS Fundamentals
  { name: "DSA", color: "#6A1B9A" },
  { name: "OOPS", color: "#00897B" },
  { name: "DBMS", color: "#336791" },
  { name: "Computer Networks", color: "#455A64" },

  // Tools & Cloud
  { name: "Git", color: "#F05032" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Postman", color: "#FF6C37" },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/10 blur-[100px] rounded-full pointer-events-none" />

       <div className="mb-16 text-center">
          <h2 className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">My Arsenal</h2>
          <h1 className="text-white text-4xl md:text-6xl font-black">Tools & Technologies.</h1>
       </div>

      <div className="relative w-full flex flex-col gap-10 overflow-hidden">
        {/* Row 1: Marquee Left */}
        <div className="flex w-full overflow-hidden mask-linear-fade">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="relative group bg-tertiary border border-white/5 px-8 py-4 rounded-xl flex items-center gap-4 hover:border-neon-purple/50 transition-colors cursor-default"
              >
                <div
                  className="w-3 h-3 rounded-full shadow-[0_0_10px]"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`,
                  }}
                />
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-neon-cyan transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Marquee Right */}
        <div className="flex w-full overflow-hidden mask-linear-fade">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [-1000, 0] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...skills, ...skills, ...skills].reverse().map((skill, index) => (
               <div
                key={index}
                className="relative group bg-tertiary border border-white/5 px-8 py-4 rounded-xl flex items-center gap-4 hover:border-neon-cyan/50 transition-colors cursor-default"
              >
                 <div
                  className="w-3 h-3 rounded-full shadow-[0_0_10px]"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`,
                  }}
                />
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-neon-purple transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
