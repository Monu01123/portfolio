import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import p1 from "./p1.png"; 
import p2 from "./p2.png"; 
import p3 from "./p3.png";
import SectionWrapper from "../hoc/SectionWrapper"; 
import { textVariant } from "../utils/motion";

const projects = [
    {
    title: "E-Learning Platform",
    problem: "Scalable course management.",
    tech: ["React","Express.js", "MySQL", "Azure"],
    built: "Course creation, Student enrollment, Progress tracking",
    challenges: "Complex SQL queries, Azure deployment.",
    impact: "Streamlined delivery for 500+ students.",
    image: p1,
    link: "https://github.com/Monu01123/project",
    demo: "https://project-azure-six-24.vercel.app",
    featured: false,
    color: "#03DAC6"
  },
  {
    title: "Chat Application",
    problem: "Real-time, low-latency communication.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    built: "Real-time messaging, User authentication, Room creation",
    challenges: "Handling concurrent sockets, message storage.",
    impact: "Reduced latency by 40%.",
    image: p2,
    link: "https://github.com/Monu01123/chat_app",
    demo: "https://chat-app-psi-amber-94.vercel.app",
    featured: true,
    color: "#BB86FC"
  },
  {
  title: "AI Resume Analyzer",
  problem: "Difficulty in evaluating resume quality and job relevance.",
  tech: ["React", "Node.js", "Gemini API", "MongoDB"],
  built: "Resume parsing, AI-based skill matching, ATS score, role-based feedback.",
  challenges: "Prompt engineering, API integration, response optimization, and data validation.",
  impact: "Helped users improve resume quality and job relevance through automated AI feedback.",
  image: p3,
  link: "https://github.com/Monu01123/Resume_analyser",
  demo: "https://resume-maker-pi-seven.vercel.app",
  featured: true,
  color: "#CF6679"
}
,
];

const Card = ({ i, project, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -top-[25%] h-[500px] w-[90%] md:w-[1000px] rounded-[25px] origin-top overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Full Image Background with Scale Effect */}
        <div className="absolute inset-0 w-full h-full">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                <img src={project.image} alt="project" className="object-cover w-full h-full" />
            </motion.div>
        </div>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-0" />

        {/* Content Overlay */}
        <div className="relative z-10 p-10 flex flex-col justify-end h-full">
            <div className="md:w-[70%]">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{project.title}</h2>
                <p className="text-white/90 text-lg italic mb-6 drop-shadow-md">{project.problem}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold">{t}</span>
                    ))}
                </div>

                <div className="flex gap-4">
                     <button onClick={() => window.open(project.link, "_blank")} className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-creative-orange hover:text-white transition-colors">
                        See Code <GitHubIcon fontSize="small" />
                     </button>
                     <button onClick={() => window.open(project.demo, "_blank")} className="bg-black/50 backdrop-blur-md border border-white/50 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                        Live Demo <LaunchIcon fontSize="small" />
                     </button>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className="relative mt-20">
      <motion.div variants={textVariant()}>
        <p className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">My Work</p>
        <h2 className="text-white text-4xl md:text-6xl font-black mb-10">Projects.</h2>
      </motion.div>

      {projects.map((project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05 );
        return <Card key={i} i={i} project={project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
      })}
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
