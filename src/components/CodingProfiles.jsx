import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const profiles = [
  {
    name: "LeetCode",
    username: "monu01123",
    rating: "Rating - 1920",
    solved: "800+",
    link: "https://leetcode.com/u/Monu_595/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    name: "HackerRank",
    username: "monu_dev",
    rating: "5 Star",
    solved: "Gold Badge",
    link: "https://www.hackerrank.com/monumeena0112",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
  },
  {
    name: "GitHub",
    username: "Monu01123",
    rating: "Active",
    solved: "50+ Repos",
    link: "https://github.com/Monu01123",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

const ProfileCard = ({ index, name, username, rating, solved, link, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-primary p-6 rounded-[20px] shadow-card border border-white/10 flex items-center gap-4 cursor-pointer hover:bg-tertiary transition-colors"
    onClick={() => window.open(link, "_blank")}
  >
    <div className="w-16 h-16 rounded-full bg-white p-2 flex justify-center items-center">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>

    <div className="flex-1">
      <h3 className="text-white font-bold text-[20px]">{name}</h3>
      <p className="text-secondary text-[14px]">@{username}</p>
      
      <div className="mt-2 flex justify-between items-center text-sm">
        <span className="text-green-400 font-medium font-mono">{rating}</span>
        <span className="text-white/60">{solved}</span>
      </div>
    </div>
  </motion.div>
);

const CodingProfiles = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">Problem Solving</p>
        <h2 className="text-white text-4xl md:text-6xl font-black">Coding Profiles.</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {profiles.map((profile, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CodingProfiles, "codingprofiles");
