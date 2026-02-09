import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Copy */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-xl mb-2">Monu Meena</h3>
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-secondary text-sm font-medium">
             <a href="#about" className="hover:text-white transition-colors">About</a>
             <a href="#recentprojects" className="hover:text-white transition-colors">Projects</a>
             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons (Mini) */}
        <div className="flex gap-4">
             <a href="https://github.com/Monu01123" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
                <GitHubIcon fontSize="small" />
             </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
                <LinkedInIcon fontSize="small" />
             </a>
             <a href="mailto:contact@example.com" className="text-secondary hover:text-white transition-colors">
                <EmailIcon fontSize="small" />
             </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
