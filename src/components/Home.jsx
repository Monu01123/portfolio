import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Hackathons from "./Hackathons";
import Certificates from "./Certificates";
import CodingProfiles from "./CodingProfiles";
import Blogs from "./Blogs";

function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />

      {/* Main Content Container - Wrapped for consistent spacing */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10 space-y-32">

        <About />

        {/* RECENT PROJECTS SECTION */}
        <Projects />

        <Hackathons />

        <Experience />

        <Certificates />

        <CodingProfiles />

        {/* SKILLS SECTION */}
        <Skills />

        <Blogs />

        {/* CONTACT SECTION */}
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
