import React from "react";

import SchoolIcon from "@mui/icons-material/School";
import SectionWrapper from "../hoc/SectionWrapper";

const education = [
  {
    title: "Master's in Computer Applications (MCA)",
    institution: "NIT BHOPAL",
    date: "2023 - 2026",
    description: "Specialized in software development, database management, and web technologies.",
    icon: <SchoolIcon />,
    color: "#915eff",
    image: "https://conf.manit.ac.in/visionzerosummit/assets/img/img1.jpg",
  },
  {
    title: "Bachelor's in Computer Science",
    institution: "Dr K. N. Modi University",
    date: "2020 - 2023",
    description: "Focused on foundational computer science principles, algorithms, and data structures.",
    icon: <SchoolIcon />,
    color: "#00d8ff",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepWgGq-9nrqFJnRD6u0dTDrgMXzrvp8g8YTsYHLvVryqJ3IxFevhe7_zHXIa_YskuQLgwJf1gNNCaSmQdu-0tagYh-lTTdqxaOzvbLmqH_fY11XVOlXQ-0wVeJB8nXGDG4KB-Tw=s1360-w1360-h1020-rw",
  },
];

const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8">
             {/* Desktop Left Side (Card) */}
            <div className="hidden md:block w-5/12">
               <div className="text-left bg-tertiary rounded-2xl border-b-4 shadow-card hover:bg-black-200 transition-colors overflow-hidden"
                    style={{ borderColor: experience.color }}>
                   {/* Full Width College Image */}
                   <div className="w-full h-[180px] overflow-hidden relative">
                        <img 
                          src={experience.image} 
                          alt={experience.institution} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-90" />
                   </div>

                   <div className="p-6 pt-2">
                       <h3 className="text-white font-bold text-xl">{experience.title}</h3>
                       <p className="text-secondary text-[14px] font-semibold" style={{ color: experience.color }}>{experience.institution}</p>
                       <ul className="mt-4 list-disc ml-5 space-y-2 text-white-100 text-[14px]">
                           <li>{experience.description}</li>
                       </ul>
                   </div>
               </div>
            </div>

            {/* Center Line & Node */}
            <div className="z-20 flex flex-col items-center w-2/12 my-4 md:my-0">
                 <div className="w-12 h-12 rounded-full flex justify-center items-center border-4 border-black-200 shadow-[0_0_20px] transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: experience.color, boxShadow: `0 0 20px ${experience.color}` }}>
                     <div className="text-white">
                         {experience.icon}
                     </div>
                 </div>
                 <div className="w-1 h-full bg-white/10 absolute top-0 -z-10" /> 
            </div>

            {/* Right Side (Date for Desktop, Card for Mobile) */}
             <div className="w-full md:w-5/12 pl-0 md:pl-8">
                 {/* Desktop Date */}
                <p className="hidden md:block text-secondary text-sm text-left font-bold tracking-wider">{experience.date}</p>

                {/* Mobile Card */}
                 <div className="md:hidden bg-tertiary rounded-2xl border-b-4 shadow-card hover:bg-black-200 transition-colors overflow-hidden"
                    style={{ borderColor: experience.color }}>
                   {/* Full Width College Image (Mobile) */}
                   <div className="w-full h-[160px] overflow-hidden relative">
                        <img 
                          src={experience.image} 
                          alt={experience.institution} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-80" />
                   </div>

                   <div className="p-6 pt-4">
                       <h3 className="text-white font-bold text-lg">{experience.title}</h3>
                       <p className="text-secondary text-[12px] font-semibold" style={{ color: experience.color }}>{experience.institution}</p>
                       <p className="text-secondary text-xs mt-1 mb-2 font-bold">{experience.date}</p>
                       <ul className="mt-4 list-disc ml-5 space-y-2 text-white-100 text-[14px]">
                           <li>{experience.description}</li>
                       </ul>
                   </div>
               </div>
            </div>
        </div>
    )
}

const Experience = () => {
  return (
    <section id="education" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">Learning Path</h2>
        <h1 className="text-white text-4xl md:text-6xl font-black">Education.</h1>
      </div>

       <div className="relative flex flex-col items-center">
           {/* Vertical Line Background */}
           <div className="absolute top-0 bottom-0 w-1 bg-white/10" />

           {education.map((exp, index) => (
               <ExperienceCard key={index} experience={exp} index={index} />
           ))}
       </div>
    </section>
  );
};

export default SectionWrapper(Experience, "education");
