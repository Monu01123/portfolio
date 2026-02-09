import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const hackathons = [
  {
    name: "Smart India Hackathon",
    description:
      "Reached the grand finale by developing an IoT-based waste management system integrated with cloud services for real-time monitoring and analytics.",
    achievement: "Finalist",
    tech: ["#IoT", "#Cloud", "#React", "#NodeJS"],
    date: "2024",
  },
  {
    name: "HackWithInfy",
    description:
      "Qualified through multiple competitive coding rounds and secured an interview opportunity at Infosys by demonstrating strong problem-solving and algorithmic skills.",
    achievement: "Interview Shortlisted",
    tech: ["#DSA", "#C++", "#ProblemSolving", "#Algorithms"],
    date: "2025",
  },
];

const HackathonCard = ({ index, hackathon }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-white/10"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] font-bold">{hackathon.name}</p>
      <p className="text-secondary text-[12px] uppercase tracking-wider mt-1">{hackathon.achievement} - {hackathon.date}</p>
      <p className="mt-4 text-secondary text-[14px]">{hackathon.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {hackathon.tech.map((tag) => (
          <p key={tag} className="text-[14px] text-blue-400">
            {tag}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Hackathons = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">Accomplishments</p>
        <h2 className="text-white text-4xl md:text-6xl font-black">Hackathons.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={`hackathon-${index}`} index={index} hackathon={hackathon} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hackathons, "hackathons");
