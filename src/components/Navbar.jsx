import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
];

const Navbar = () => {
    const [active, setActive] = useState("home");

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 max-w-7xl mx-auto right-0">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-white font-bold text-xl tracking-tight">
                    Monu<span className="text-white/50">Dev</span>
                </h1>

                {/* Links - Hidden on mobile, Flex on md+ */}
                < ul className="hidden md:flex gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/5" >
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className={`text-sm font-medium cursor-pointer transition-colors ${active === link.id ? "text-white" : "text-white/60 hover:text-white"}`}
                            onClick={() => setActive(link.id)}
                        >
                            <a href={`#${link.id}`}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-creative-orange px-5 py-2 rounded-full text-sm font-bold flex items-center gap-1 hover:bg-neutral-200 transition-colors"
                >
                    Get in touch
                    <ArrowForwardIcon style={{ fontSize: 16 }} />
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
