import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import CreateIcon from "@mui/icons-material/Create";

const services = [
  {
    title: "Full-Stack Developer",
    icon: <WebIcon fontSize="large" />,
    description:
      "I build scalable and responsive web applications using React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Frontend Engineer",
    icon: <PhoneIphoneIcon fontSize="large" />,
    description:
      "I create intuitive, high-performance user interfaces with React and modern CSS frameworks.",
  },
  {
    title: "Backend & API Developer",
    icon: <StorageIcon fontSize="large" />,
    description:
      "I design secure, efficient REST APIs and backend systems with authentication and database integration.",
  },
  {
    title: "Problem Solving (DSA)",
    icon: <CreateIcon fontSize="large" />,
    description:
      "I solve complex problems using C++ and Data Structures to build optimized and reliable solutions.",
  },
];


const ServiceCard = ({ index, title, icon, description }) => (
  <div className="xs:w-[250px] w-full bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[20px] shadow-card">
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-black-200 transition-colors duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-black-100 flex justify-center items-center text-neon-purple shadow-[0_0_15px_rgba(145,94,255,0.3)]">
        {icon}
      </div>
      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
      <p className="text-secondary text-[14px] text-center">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={{
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}>
        <p className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">Introduction</p>
        <h2 className="text-white text-4xl md:text-6xl font-black">Overview.</h2>
      </motion.div>

      <motion.p
        variants={{
          hidden: { opacity: 0, x: -20 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
        }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Software Developer with strong experience in building
        full-stack web applications using React, Node.js, and MongoDB. I specialize
        in writing clean, efficient, and scalable code, with a strong foundation in
        Data Structures and Algorithms using C++. I enjoy solving real-world
        problems and continuously improving my technical skills to deliver
        reliable, high-quality solutions.
      </motion.p>


      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
