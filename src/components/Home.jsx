import photo from "./profile.jpg";
import design from "./bott.svg";
import "./Navbar.css";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import p1 from "./image.png";
import { useRef, useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import chat from './kk.png';

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const hoverableElementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const hoverableElement = hoverableElementRef.current;
    if (hoverableElement) {
      hoverableElement.addEventListener("mouseenter", handleMouseEnter);
      hoverableElement.addEventListener("mouseleave", handleMouseLeave);
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (hoverableElement) {
        hoverableElement.removeEventListener("mouseenter", handleMouseEnter);
        hoverableElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${isHovering ? "" : "active"}`}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 h-screen transition-all duration-500 md:flex-col">
        <div
          ref={hoverableElementRef}
          className="col-span-4 flex justify-center bg-black py-6 transition-all duration-500 lg:overflow-hidden"
        >
          <section className="relative bg-white rounded-xl h-min shadow-lg p-6 w-80 text-center mt-8 transition-all duration-500">
            <div className="absolute top-0 left-0 -translate-y-6 -translate-x-6">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-500"
              >
                <path
                  d="M0 40a40 40 0 1 1 30 40"
                  stroke="#F97316"
                  strokeDasharray="8 8"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="w-52 h-62 mx-auto rounded-lg overflow-hidden">
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl font-bold mt-4">Monu Meena</h2>
            <image
              src={design}
              alt="SVG Image"
              width="200"
              height="200"
              style={{ clipPath: "inset(0 0 0 50%)" }}
              className="absolute top-96 -left-24 transform transition-transform duration-500 scale-110"
              loading="lazy"
            />
            <p className="text-m text-gray-500 mt-20">
              A Software Engineer who has developed countless innovative
              solutions.
            </p>
          </section>
        </div>

        <div className="custommedia col-span-6 flex-col bg-black mt-6 py-6 transition-all duration-500 lg:h-screen lg:overflow-y-scroll lg:hide-scrollbar">
          <div className="customedia2 px-4 md:px-0">
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              FULL STACK
            </h1>
            <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
              DEVELOPER
            </h1>
            <p className="text-neutral-500 text-base sm:text-lg md:text-xl mt-2 font-semibold w-11/12 sm:w-96 lg:w-96">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row">
              <div className="flex flex-col pr-8 mb-6 sm:mb-0">
                <h1 className="text-white text-6xl font-bold">+14</h1>
                <h1 className="text-neutral-500 text-xl font-semibold">
                  PROJECTS
                </h1>
              </div>
              <div className="flex flex-col pr-4">
                <h1 className="text-white text-6xl font-bold">+10</h1>
                <pre className="text-neutral-500 text-xl font-semibold">
                  TECHNOLOGIES & TOOLS
                </pre>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row">
              <div className="text-white m-2 p-3 w-64 h-52 bg-orange-500 rounded-md flex flex-col justify-between">
                <FilePresentIcon sx={{ fontSize: 40 }} />
                <p className="text-xl font-bold">
                  DYNAMIC ANIMATION, MOTION DESIGN
                </p>
                <button className="btn">
                  <EastOutlinedIcon />
                </button>
              </div>
              <div className="text-white m-2 p-3 h-52 w-64 bg-lime-500 rounded-md flex flex-col justify-between">
                <BackupTableIcon sx={{ fontSize: 40, color: "black" }} />
                <p className="text-xl font-bold">
                  FRAMER, FIGMA, WORDPRESS, REACTJS
                </p>
                <button className="btn">
                  <EastOutlinedIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center sm:items-center md:items-center lg:items-start">
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              RECENT
            </h1>
            <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
              PROJECTS
            </h1>
            <div className=" mt-5 flex flex-col items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500">
              <div className="mt-5 flex items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-4 w-96">
                  <div className="relative w-32 h-20">
                    <img
                      src={chat}
                      alt="Template Preview"
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      Chat Application
                    </h1>
                    <p className="text-sm text-gray-400">
                      <span className="font-medium"></span> React &nbsp;|&nbsp;
                      <span className="font-medium"></span> Node.js, Express
                      &nbsp;|&nbsp;
                      <span className="font-medium"></span> MongoDB
                      &nbsp;|&nbsp;
                      <span className="font-medium"></span> Socket.io
                    </p>

                    <a
                      href="https://github.com/Monu01123/chat_app"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white font-semibold"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>

                <a
                  href="https://chat-app-8i26.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-orange-500 text-xl -rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="arrow w-6 h-6 transition-all duration-300 ease-in-out transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="mt-5 flex items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-4 w-96">
                  <div className="relative w-32 h-20">
                    <img
                      src={p1}
                      alt="Template Preview"
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      E-learning platform
                    </h1>
                    <p className="text-sm text-gray-400">
                      <span className="font-medium"></span> React &nbsp;|&nbsp;
                      <span className="font-medium"></span> Node.js, Express
                      &nbsp;|&nbsp;
                      <span className="font-medium"></span> MySql &nbsp;|&nbsp;
                      <span className="font-medium"></span> Azure
                    </p>
                    <a
                      href="https://github.com/Monu01123/Minor_project"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white font-semibold"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>

                <a
                  href="https://chat-app-8i26.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-orange-500 text-xl -rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="arrow w-6 h-6 transition-all duration-300 ease-in-out transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="mt-5 flex items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-4 w-96">
                  <div className="relative w-32 h-20">
                    <img
                      src={p1}
                      alt="Template Preview"
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      E-Commerce Platform
                    </h1>
                    <p className="text-sm text-gray-400">
                      <span className="font-medium"></span> React &nbsp;|&nbsp;
                      <span className="font-medium"></span> Node.js, Express
                      &nbsp;|&nbsp;
                      <span className="font-medium"></span> MongoDB &nbsp;
                    </p>
                    <a
                      href="https://github.com/Monu01123/mern_project"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white font-semibold"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>

                <a
                  href="https://chat-app-8i26.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-orange-500 text-xl -rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="arrow w-6 h-6 transition-all duration-300 ease-in-out transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* 3rd section */}
          <div className="mt-20 flex flex-col items-center lg:items-start">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center lg:text-left">
              TOOLS &
            </h1>
            <h1 className="text-neutral-700 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center lg:text-left">
              TECHNOLOGY
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {/* Card 1 */}
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={p1}
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    NajmAI
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={p1}
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    NajmAI
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={p1}
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    NajmAI
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={p1}
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    NajmAI
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={p1}
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    NajmAI
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20 flex flex-col items-center lg:items-start">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center lg:text-left">
              EDUCATION
            </h1>
            <h1 className="text-neutral-700 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center lg:text-left">
              QUALIFICATIONS
            </h1>
            <div className="mt-10 space-y-6 w-5/6 lg:w-3/4">
              {/* Master's Degree */}
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h2 className="text-white text-2xl font-bold">
                  Master's in Computer Applications (MCA)
                </h2>
                <p className="text-gray-400 text-lg mt-2">
                  ABC University | 2021 - 2023
                </p>
                <p className="text-gray-500 text-base mt-2">
                  Specialized in software development, database management, and
                  web technologies.
                </p>
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h2 className="text-white text-2xl font-bold">
                  Bachelor's in Computer Science
                </h2>
                <p className="text-gray-400 text-lg mt-2">
                  XYZ University | 2017 - 2020
                </p>
                <p className="text-gray-500 text-base mt-2">
                  Focused on foundational computer science principles,
                  algorithms, and data structures.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 sm:flex justify-center sm:justify-start">
            {/* LeetCode Section */}
            <div className="text-center my-8">
              <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
                LEETCODE
              </h1>
              <img
                src="https://leetcard.jacoblin.cool/AIMonu_?ext=contest"
                alt="LeetCode Stats"
                className="mx-auto border-2 border-gray-300 rounded-lg shadow-lg w-[310px] sm:w-3/4 md:w-3/4 "
                loading="lazy"
              />
            </div>

            {/* GitHub Stats Section */}
            <div className="my-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
                GitHub Stats
              </h2>
              <div className="flex justify-center mb-8">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Monu01123&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="max-w-full sm:w-3/4 md:w-3/4 lg:w-3/4 rounded-lg shadow-md w-[330px] "
                  loading="lazy"
                />
              </div>

              {/* GitHub Streak Section */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
                  GitHub Streak
                </h2>
                <div className="flex justify-center">
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=Monu01123&theme=radical"
                    alt="GitHub Streak"
                    className="max-w-full sm:w-3/4 md:w-3/4 lg:w-3/4 rounded-lg shadow-md w-[330px] "
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center sm:items-center md:items-center lg:items-start">
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              CONTACT
            </h1>
            <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
              ME
            </h1>

            <section class="bg-black-900">
              <div class="py-8 lg:p-16 px-4 md:w-[45rem] w-96">
                <form action="#" class="space-y-8 w-auto">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="shadow-sm border text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-transparent focus:border-0"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="subject"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      class="block p-3 w-full text-sm text-gray-900 bg-neutral-600 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-transparent focus:border-0"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-transparent focus:border-0"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-orange-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-primary-300 "
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
