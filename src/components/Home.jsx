import photo from "./photo.jpg";
import design from "./bott.svg";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 h-screen">
      <div className="md:col-span-4 flex justify-center bg-black py-6 md:py-0">
        <section className="relative bg-white rounded-xl shadow-lg p-6 w-80 sm:w-96 md:w-80 lg:w-96 text-center mt-8">
          <div className="absolute top-0 left-0 -translate-y-6 -translate-x-6">
            <svg
              width="100"
              height="100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold mt-4">Monu Meena</h2>
          <img
            src={design}
            alt="SVG Image"
            width="200"
            height="200"
            style={{ clipPath: "inset(0 0 0 50%)" }}
            className="absolute top-80 -left-24 transform transition duration-300 scale-110"
          />
          <p className="text-m text-gray-500 mt-20">
            A Software Engineer who has developed countless innovative
            solutions.
          </p>
        </section>
      </div>

      <div className="md:col-span-6 bg-black mt-6 md:mt-0 py-6">
        <div className="px-4 md:px-0">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold">
            FULL STACK
          </h1>
          <h1 className="text-neutral-700 text-4xl sm:text-6xl md:text-8xl font-bold">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
