import photo from "./profile.jpg";
import design from "./bott.svg";
import "./Navbar.css";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import p1 from "./image.png";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 h-screen transition-all duration-500">
      <div className="md:col-span-4 flex justify-center bg-black py-6 md:py-0 transition-all duration-500 overflow-hidden">
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
            />
          </div>
          <h2 className="text-3xl font-bold mt-4">Monu Meena</h2>
          <img
            src={design}
            alt="SVG Image"
            width="200"
            height="200"
            style={{ clipPath: "inset(0 0 0 50%)" }}
            className="absolute top-96 -left-24 transform transition-transform duration-500 scale-110"
          />
          <p className="text-m text-gray-500 mt-20">
            A Software Engineer who has developed countless innovative
            solutions.
          </p>
        </section>
      </div>

      <div className="custommedia md:col-span-6 bg-black mt-6 md:mt-0 py-6 transition-all duration-500 h-screen overflow-y-scroll hide-scrollbar">
        <div className="customedia2 px-4 md:px-0">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            FULL STACK
          </h1>
          <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
            DEVELOPER
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg md:text-xl mt-2 font-semibold w-11/12 sm:w-96 lg:w-96">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
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

          <div className="mt-12 flex">
            <div className="text-white m-2 p-3 w-64 h-52 bg-orange-500 rounded-md flex flex-col justify-between">
              <FilePresentIcon sx={{ fontSize: 40 }} />
              <p className="text-xl font-bold">
                DYNAMIC ANIMATION, MOTION DESIGN
              </p>
              <button className="btn">
                <EastOutlinedIcon />
              </button>
            </div>
            <div className="text-white m-2 p-3 w-64 bg-lime-500 rounded-md flex flex-col justify-between">
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

        {/* // Second Section */}
        <div className="mt-20">
        <h1 className="text-white text-6xl md:text-8xl font-bold">
            RECENT
          </h1>
          <h1 className="text-neutral-700 text-6xl md:text-8xl font-bold">
            PROJECTS
          </h1>
          <div className="mt-5 flex items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500">
          <div className="mt-5 flex items-center justify-between w-5/6 bg-black p-6 rounded-lg cursor-pointer hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
  <div className="flex items-center space-x-4 w-96">
    <div className="relative w-32 h-20">
      <img
        src={p1}
        alt="Template Preview"
        className="rounded-lg object-cover"
      />
    </div>
    <div>
      <h1 className="text-2xl font-bold text-white">NajmAI</h1>
      <p className="text-sm text-gray-400">SaaS Framer Template</p>
    </div>
  </div>

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
</div>

</div>

        </div>
      </div>
    </div>
  );
}

export default Home;
