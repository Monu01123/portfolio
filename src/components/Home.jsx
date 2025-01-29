import photo from "./photo.jpg";
// import design from "./bott.svg";
import "./Navbar.css";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import p1 from "./image.png";
import { useRef, useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import chat from "./kk.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import emailjs from "emailjs-com";
import { FileText } from "lucide-react";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import linkdin from "./linkedin.png";

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const hoverableElementRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s3i2siu",
        "template_tfw96lf",
        {
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Dy6PRZnr5u0QZwfIs"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send the message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

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
      <nav className="flex justify-center mb-5">
        <ul className="flex space-x-8 custom-dark-bg p-3 pt-2 w-min mt-8 rounded-xl">
          <li className="group relative text-white cursor-pointer">
            <a href="#home">
              <HomeOutlinedIcon />
              <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Home
              </span>
            </a>
          </li>
          <li className="group relative text-white cursor-pointer">
            <a href="#recentprojects">
              <FolderOpenOutlinedIcon />
              <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Projects
              </span>
            </a>
          </li>
          <li className="group relative text-white cursor-pointer">
            <a href="#skills">
              <BuildOutlinedIcon />
              <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Skills
              </span>
            </a>
          </li>
          <li className="group relative text-white cursor-pointer">
            <a href="#education">
              <BorderColorOutlinedIcon />
              <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Education
              </span>
            </a>
          </li>
          <li className="group relative text-white cursor-pointer">
            <a href="#contact">
              <ConnectWithoutContactOutlinedIcon />
              <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Contact Me
              </span>
            </a>
          </li>
        </ul>
      </nav>

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
                className="w-full h-full object-contain transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl font-bold mt-4">Monu Meena</h2>
            <ul className="flex justify-center space-x-4 mt-4">
              <li>
                <a
                  href="mailto:monumeena0112@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABCFBMVEX////lOTVMr1AeiOXGKCj7wC2gx/IAgOOv2LA8qkEAeOLk8uToXVrqZ0PCHyD9yCrlNTHkMTQwpzby+f5DrEd8ru2cz577vBPjo6PkKybCCQn+4KX97+/++vrqbWv519btgH7EFRX+893jGxTmQz/2zMzreHbxo6MAjO49rlHnTEn1xMPrwMDfk5P+8NT94az82pX+6cHKQ0P8xUn/+vDOTU3ZgID81H324OD8yVnUbW3PVVX2wK7qXzXzsK6twea2L0PovCS+2q6ZXonQHQDDvUeCbaakuUpOgdC6QFHpwTx7tVOhWX6auVBefcbcvjyrUG12crDioY7D2/bU6tSPvfBdoeqJx4unjuxaAAADZUlEQVR4nO3ZaXOTQBjA8d2E2ksR2/RYCkmQHCTpfWhrbW21qdpYa63V7/9NXCASWBaasGQZZ57/S0mY3/CwpKwIQRAEQRAEQRAEQRAEQRAEQdD/krG5vrW1XhM/0fbO7u7G3qH4iZCxpVhu6v6m2In2Dta8ZnaFWcdHuuKn6m9MgRO9XZsZtnbwWtBkqUqQfpR5htsHgcllCanMU0sJpVoZR7gTJlHUicgE13Ulmv4uwwgPT6ImqtoQQCmqwqpOjyc9SXR0w7KbjtkL5d3vvYkulvmeQxK5qzY5KEXtVidQmdWzlzzUXmZU7JbyUM+J1hv3DE1MXnBR2W+qBJSmaefjneBc017JQmFsV42nv25UbYwlojDpPvkgrXUJlovCmt1Ovd/Ntu19TiqKXqxWispsEf9TklGYNJpJ32w2hibpKJy4Cumqw0Wh6I3V4qxCo2WPPpI76sOFlY7irkJ/1aWjLj9mRj2b/XQV+0mOorBG2tEvtUnkOBfVr8wJoJxrhb1YDIqq6qERGvWoiYv6XJoXQZWdL1/1dJS7CoMR1hqEORhH3Qw6gijaN0tNR2END0fYxrFjMVS/RBNGMSPkoOgqdEdo1O34IRZ128kF5Y7QSkd5I4yPLo66G3imHFDuCEerkI+iD1KN++8RlDe63FDOfTDCBFRSIdSlP7rcUGXn+4UuiLoZBKacUN4qFEL1R6QcUeVr78bKiLotlaaC8ldhJtTdoDMlFO3HVSZUv8SUK8q5V63JUbedqaLoKtzvToY6Y0eXP6rsOG3+U5Kfpv2cj5FyR5UXlmuE93vCjZDa4pIUlPvLO57JrptIFoq+1JExRui/GkpDsX+I80fn//kuEeVuFKReLO3fdoNMVOwNgTEF7xNyUe7mU+LocPDyLBnlvnXyTeF3VNmohFVIRxfa+pCOCu9kjEYX3fcoAEVXIaMizCZfESi6CsPPBvrAZA4Xg0LN0YOUdGNbVgWh/B1Xb9Vx9meLQiHz3F2F0VVXOAqhXoOQBnfPv0AUMqsJ/ztSJAqZCXvFhaKSAhSgAAUoQAGK38PCtFBLvzKj0NSuVCW7CT1yVHmgBKaH0PLvuCoH1PwfARNVrZRno2VAVZhKq0Im2sPjCtOEqMNVprlFURMEQRAEQRAEQRAEQRAEQRAESeov8oR9mqxpYYIAAAAASUVORK5CYII="
                    alt=""
                    width="30"
                    height="10"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Monu01123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </li>

              <li className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/monu-meena/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="30"
                    height="10"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <div className="flex justify-center items-center mt-6">
              <a
                href={`${process.env.PUBLIC_URL}/Monu_Meena_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 shadow-md flex items-center gap-2"
              >
                <FileText /> View Resume
              </a>
            </div>
            <p className="text-m text-gray-500 mt-10">
              A Software Engineer who has developed countless innovative
              solutions.
            </p>
          </section>
        </div>

        <div
          id="home"
          className="custommedia col-span-6 flex-col bg-black mt-6 py-6 transition-all duration-500 lg:h-screen lg:overflow-y-scroll lg:hide-scrollbar"
        >
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
              <div className="group perspective cursor-pointer">
                <div className="relative text-white m-2 p-3 w-64 h-52 bg-orange-500 rounded-2xl flex flex-col justify-between transform transition-all duration-700 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105 shadow-lg group-hover:shadow-2xl">
                  <div className="absolute inset-0 backface-hidden">
                    <FilePresentIcon sx={{ fontSize: 40 }} />
                    <p className="text-xl font-bold mt-4">
                      Skills & Technologies
                    </p>
                    <a href="#skills" className="text-white mt-auto">
                      <EastOutlinedIcon />
                    </a>
                  </div>
                  <div className="absolute inset-0 backface-hidden bg-orange-700 flex flex-col items-center justify-center rotate-y-180 rounded-2xl p-4">
                    <p className="text-lg font-semibold">
                      Explore New Tools & Technologies!
                    </p>
                    <a href="#skills" className="mt-2 text-white underline">
                      See Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="group perspective cursor-pointer">
                <div className="relative text-white m-2 p-3 w-64 h-52 bg-green-800 rounded-2xl flex flex-col justify-between transform transition-all duration-700 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105 shadow-lg group-hover:shadow-2xl">
                  <div className="absolute inset-0 backface-hidden">
                    <BackupTableIcon sx={{ fontSize: 40, color: "black" }} />
                    <p className="text-xl font-bold mt-4">
                      REACTJS, EXPRESSJS, NODEJS, MONGODB
                    </p>
                    <a href="#recentprojects" className="text-white mt-auto">
                      <EastOutlinedIcon />
                    </a>
                  </div>
                  <div className="absolute inset-0 backface-hidden bg-lime-700 flex flex-col items-center justify-center rotate-y-180 rounded-2xl p-4">
                    <p className="text-lg font-semibold">
                      See Recent Projects!
                    </p>
                    <a
                      href="#recentprojects"
                      className="mt-2 text-white underline"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="recentprojects"
            className="mt-20 flex flex-col items-center sm:items-center md:items-center lg:items-start"
          >
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              RECENT
            </h1>
            <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
              PROJECTS
            </h1>
            <div className=" mt-5 flex flex-col items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500">
            <div className="mt-5 flex items-center justify-center sm:justify-start w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">                <div className="flex items-center space-x-4 w-96">
                  <div className="relative w-32 h-20">
                    <img
                      src={chat}
                      alt="Template Preview"
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold text-white sm:text-2xl">
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

              <div className="mt-5 flex items-center justify-center sm:justify-start w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">                <div className="flex items-center space-x-4 w-96">
                  <div className="relative w-32 h-20">
                    <img
                      src={p1}
                      alt="Template Preview"
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold text-white sm:text-2xl">
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

              <div className="mt-5 flex items-center justify-center sm:justify-start w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
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
                    <h1 className="text-base font-bold text-white sm:text-2xl">
                      E-Commerce Platform
                    </h1>
                    <p className="text-sm text-gray-400 ">
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
          <div
            id="skills"
            className="mt-20 flex flex-col items-center lg:items-start"
          >
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzA72xLvnMJ4eln6FvJ0QFIneZ5LTwYVuPw&s"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    MERN Stack
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
                    src="data:image/webp;base64,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"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full objectfit-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    c++
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8BAQEAAAD19fX4+Pj8/Pzy8vLX19fm5ubu7u6vr6/q6uqmpqbGxsbBwcHR0dHe3t64uLgzMzOQkJCcnJxtbW14eHhAQEBMTEyHh4dycnK1tbWgoKB+fn7T09Orq6thYWEVFRVVVVU8PDwQEBA9PT0gICCXl5ctLS0kJCRQUFA1NTVGRkZeXl5nZ2cEQhlyAAANpElEQVR4nO1dbUPqPA+WwgAREORNUBRQAQH9/z/vYWyDkaRduyUd5368vh31rL3WLM1b07u7P/zhD3f1Xre1mY5Wh+2nirB8ev6ZTYcvnV5Q9uQKotndjPbKjMn4tfNQ9kTzoNmfTmIOFQMSnrtBt172lB3QbI2yuWGen+P+fdlTt0DQnX+6kAM8t4O3shkYEbz85GSXXsxxp2weOnQXxeilWI4fyyaD0Zuy0DuTXG5u65vsH/jonUn+3Iy0BkPG5bviuG6VzS1EdSpB70xyWLbVUxPkF3MclMkxGMjyizkOSyPYlucXcyzne+ysXc0yABeOW/8b5P3KbooJneVkMZsPNpvhZjOYzxaHpRtPpX49W+ZDm6mdGOxnr91elXhEtddpzw/WNJV69civt82c1MlZmLUamc966A52ViyPotrzwO2EQdZ0wgmPXhzMrsbrswVJpaZypFJoPmU7tVN3xRB0xpkklfr2sIzvxlkUcwze5tkxAfHNcWGawXF6zy/Fnt8ZmTkeR6jxMKHRXBr5fXK4PLX2dwZHwb2xrx86XD42b+dxZVpIwX1jqh021J2sOqA5NnA8bv+cY12gtWJC7cIe8qzPTRz3lA1RENWtfgFHIhEHE0elmtzDNfULuBPbox70mptd3zQ0Qx1NatFoSmOvf7NdzoE6WoIbzmEotHSiyuo1dulBlDp4yKkEIy1Ftl1Dsw0q1eYawYzHijBFmqBST/6SYmPdO2ahSIuoL08mhkYRsIjRo4ag54B0baeZR0FLX7dNqK3/fCYdOCn8qh+ox4rZhWa8aSgWMjhqNEHxTZBGfU9TLGIzUo9kNiac8Eu+8XX+B/6QBLPjZ3Igg2DqOf/jKILsRr0TWiTFeb6HUXtQMaHnALkzqn6eR1FqVFXKr3qhVGo+yfqmHlQ+QXqLVkv358xuUUQj9CiKI9en9LlEoQhqmn2JpOhovtXxM/xvE8297jfEt+gqYAfiCb6LP/oGe4zQqOrg8vBXgqAnd/eMuRoYfkvsiy7OIrFRqHHhKTuhdsgwxrA54iKnk4IiUBxHXZL12f/iSVpbb+/E6/Fb1BIG2DItsSc8TUt9WkUy6luNzsIUeeZfYX1vuxCjQt9wcVQ/wjypRUgbB1jstMUbJrgqOmkXnIwyO29hgxfRxuFH4u33Izxl0VXF7o+f0VwtNOILXkKfW30UGbVNuyCVYROAwLI9KzhpBxw/QbchUTA3O6QxLFNGY4vaZUi0K2blawK8hP7iTi8JQYfPAk1YKfN/QLaQRz06jyfr5uohN89sQBNvxJfTG+xUvs8C6lPzIuINxlfw9+FcqeOqupGbYPwS0R9b7kuFcfH33MMRUzhpQ8ymjZYwV5TOHZesSx7VjdZFrxw/4Z9ui0zbHqlgfR7VDRdGfej+souW0Is1U09V6uTLasFqO60rhLTSpMC8rZEOfyqVq/AQWpq6bxkVBUkWAaZmlxo1r3kBFlEpuigM6SStODPiqhowd+YVLSLt0DqoJDZcVQMWMIHB3Gn7G+qZPKkAR9xf50YKvFIY/iR1DUyHqvf8U7cDiEKoRf5HwXQ8Fc6AJqm81wRq4nPq0RhjOHv8J+hjzZlXtcYcvtJC9hNM1hBb+Qq+BOGTDc9wSj/FngfCSzhMgARZdqt4QGaIZguzxnuWmCJNKqpniEhnURsfBqWQmI7gK5A8t9HGBAvK6B3+zKAeYf4qjIA6hkFG75CqhGmBBhRSQccQ6piKe4qaAhLT65z8qzchfYBOaIUr3AVcIxCRgkIsFmGjylWZiljgKl1/aHCFpVLaWMcwyehduOmD95b+ZQP+UqiuhKzXVjump8NlStsscLuUcSsCXOHBJ6N3KMJ/taWDAiiZsgRkx8SDsR0MgeuUjmWAGjaRvUJXbs8lo/hbS0kiMkoFTlKQOoa5GBC6YxczAikavkETaM6EMMroEV+AxyWSBg0e9lL8o47REMxdwExhrt3zQE6N/UR4k7BjYmlhTW1BVXNRmFDNMoe6dWf72C2LR8DjEtGG/jGvonnVE2QOqj9o9QnUQazDzgwnXbl1NtwTEj1dFQxgBF86fhKlVmvAJImaQpPVOUeph/aAdDjOF984MYBZeA4xd8DPTZWrbtAcr42GEbArYNQ0UWQt8HO2TdjYyEaiRAC6iMkpULgdcm0W5j4oT0yjpAEihuegKTQFeIpJ69omDKdBRCLO0PxMQhU/EtuhrkdBMgjfx54CKKo967ID2A45umq0zG3ZipwZNAEwTIpl1oAhQ9JpTvagS0GorLpC2y6iJs0RQRDUzjj+QzBt91QOQ4+AUdH4x+Cnviq9JAC9pFhczAH/fwowwRSF7oP/0BpCsy1yLmryURpvgMbL/wtDKKX/PYZQ03g+xcUK+B3G5pld2ds/AahLk93CmDxlQ/2I6gWRfcM8BtwP4x9DhjI241uWqcoRh17R5hkMJsqUleqjwhFYwtAau3QHGIrUPsPqVUiTZ1DgWyRxBCi8PEnna5gdYrVkikoBJyLJ3IHXK5LEJ7pspBaQK4cIffwkLgrOq0kEGKhWNxeCbI3RYOQ3eTBMrvHnuI2BYcaMM4z8JtIIUzb8xTT4YHmKIGPQDZwtOb+7Jvj5N9+QEdCBsdRge87qK21cVDiMoZdRxZkjucN5i3ONACzFYDbbyDZrEUHmbLN2qRaiWz5ulHKeAbNtATOklwQsTFyw5vXIxoSnYT65TXyYtrhsCuAsLe/HgRulxAt4YPdD4UpdTBe4UXKG3NGpzYSgQGUZrDBNuRDQf+Lzge99dujV10RBSWLUAGQ5olD3f0NdG7K92SxT3MwnGlukBTG0r9OHSqCq4eqZRMuoepaJdcHPMF1feg+DUUymFOquUhHSMSFQheWVwQtCDEyHKykZlWuLBnfDa+MTxhlZDq4RjfskbxiBhc6Lq9/CD5HF+N4RBGV0zAnm8wbwdXNEFFuIoOItJ70G8H6R//Ch8f/zg2o2JnlqEwopPG+wYRfTFSYoeuIPSiF8m+iUaVGFgDpqid5ihDvxYLsM7hcFNy3chWste5UC3O6xEELDrWCODR0rFtQxIWCkhGgXhk4gFqpQhAFK8ZPhqOUF4TyAi0AK9aapQj9GvHsB6iZA/A0MS6sCt5z/AILiTVKgfUjKDJLk/EeBr/Wa+pbvF4a6I5HLA93g3EHFKyNf+ej4hs7a00FtaGXlbpi4uCLo4z4amDXQRAtx74980tW/IiiRjIRAJqku0DRnWcS0jHpqz4uWUBcObaJXkccMScmopwt3cI8y7XuFDl2enjiX4VSRljouQF1EtN3qkTzncBMvMurtwh2nToHwAIH7EajfC0FPjU9xv07TSXTcDNRRFZ5llD/togPUjxmNZ3BjHCcX4/w+pUKiGOiuiwznHfutTn5iXDgn70pcgNKvWdFKVJvlomw6SSNgzgPaZmA1kxV/wV+ifaotSAj668KP0wbZjho6j2VvWEbRLpG7enXATdmzFwQdvFa2juJpN+WurjADp19t9igUqbbVp6eG+F4va8FlLFanw4n/ZuULj5XDevMAlQNaFlihLdSqWjFsj6SevJaIj/FE7fY2ovO8hXYMa319foLUHbfWeU/iAojM/xoeOPR7XxJRS2a/D+PUbZYJ3pA7NKlBgK9BdkjOE+n3DAlcq4nnUxrEKrg47EQpmrE+Y+DREI1AXe3nVKxGlMEYhLznqzv9GUTFqmMTCkpO9ebC3ve1gS/U9ByDSlif6oPzXclOoBTIG1Kd/Rl8rZn3q7t0IHsvLtyfQ/WovAmK5FWreboEkldh3gBF+i7ZXAX/uFqkwl+47AzyNvu8QQVs2VZYz3/kAdnTJ3/RAVXArPxepAdAX1qdv5Syhm0/v4E0CPri8c8CkUu6zt7vbYEp4JsZK3nzR2eQ33VFrcu43LlGNkYrrN6xmxk91r9KpXYvlvQIfZrAT/I6jXcNQYbg80bz6C+v96z/ambBotg1Xdf8pOgjNCilXuE7GaY54qrUjyenQtfZji8Hqx3ByzL2tjohYjzbN9RS3MnWVN6BG6GuxmYtliOtpWgckdZyZ3QrWoLMBrK2i6WStMWbxE0RybDsO7K+KYJSW5naw7qpfa1AaOh+rRsuPC3Jn5GpTnUtCStiCZKVdsSQI+861k38+BuOJzB0XD3OZ8v3PfZGen6yHqq+M3dEcsPic/QPBn7SOcr6RwbHVVFTvzfVtgSNhniWNqSMvYFPDYPm+b/I5vDbRM9TDKWxzOgue8Q4Txj8cZBBL9yXhG+Di4FvpCJIHoYun0uj/WMUzvixsvZTej7fWZOJ+ltNpv3MjbnaaM2/9O14S1jACDpTHLNUT6NBq9Orp+NhQbXZeOy02tPRh6nZMHiYryvCY9wbtn+CZojP76fJZLL//rxu02b5lJX/4FdnbTk7QNSeVuo/L8tJJrSdp5oL3qs8UggMxiMjv0GZzTirc1mOx6dPfWeYIUxOAAO/wS20Gg2G7rrDjl6lfTPNYvsTbo7H5+08HWewRG/OuJDhowbiQTx3dBcsJMOHjMrOpesQvFjYz9n0bks6IYLuuJKTZfjf1tNbXb0r9NoLR9ss+vNZ6wa/PS16L/O9jQ0a/81h2v+X2CUIev3B71aZsR8Nu74L/7hx3+i+D+aL3cfyTGs9Wf1ON61u7xYslj/8oXT8D/89nlM7KYRzAAAAAElFTkSuQmCC"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Socket.io
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src="data:image/png;base64,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"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Docker
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src="data:image/png;base64,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"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    MySQL
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src="data:image/png;base64,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"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Tailwind CSS
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ouGA0_-mqOan643nYmR-gGBas3DlJ2LRIw&s"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Problem Solving
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZXUglaVfHQXNgCrKlDwV7KZBWL64OcFXrw&s"
                    alt="Template Preview"
                    className="rounded-lg object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Git & GitHub
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SaaS Framer Template
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div
            className="mt-20 flex flex-col items-center lg:items-start"
            id="education"
          >
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
                  NIT BHOPAL | 2023 - 2026
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
                  Dr K. N. Modi University | 2020 - 2023
                </p>
                <p className="text-gray-500 text-base mt-2">
                  Focused on foundational computer science principles,
                  algorithms, and data structures.
                </p>
              </div>
            </div>
          </div>

          <div
            className="my-8 sm:flex justify-center sm:justify-start"
            id="leetcode"
          >
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

          <div
            className="mt-20 flex flex-col items-center sm:items-center md:items-center lg:items-start"
            id="contact"
          >
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              CONTACT
            </h1>
            <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
              ME
            </h1>

            <section className="bg-black-900">
              <div className="py-8 lg:p-16 px-4 md:w-[45rem] w-96 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8 w-auto">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow-sm border text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-transparent"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block p-3 w-full text-sm text-gray-900 bg-neutral-600 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-transparent"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-transparent"
                      placeholder="Leave a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-orange-300"
                  >
                    Send message
                  </button>
                  {status && (
                    <p
                      className={`mt-4 text-sm ${
                        status.includes("successfully")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {status}
                    </p>
                  )}
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
