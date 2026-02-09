import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const certificates = [
  {
    title: "AWS Cloud Practitioner (CLF-C02) Certification Prep",
    issuer: "Amazon Web Services",
    date: "2023",
    image:
      "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
  },
  {
    title: "Career Essentials in GitHub Professional Certificate",
    issuer: "Microsoft & GitHub",
    date: "2024",
    image:
      "https://img.icons8.com/ios11/512/FFFFFF/github.png",
  },
];


const CertificateCard = ({ index, title, issuer, date, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-white/30 transition-colors"
  >
    <div className="relative w-full h-[230px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain rounded-2xl"
      />
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{issuer}</p>
      <p className="mt-1 text-secondary text-[12px]">{date}</p>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">My Learning</p>
        <h2 className="text-white text-4xl md:text-6xl font-black">Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
