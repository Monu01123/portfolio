// import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import DynamicBackground from "./components/DynamicBackground.jsx";

function App() {
  return (
      <div className="bg-transparent relative min-h-screen">
        <DynamicBackground />
        {/* <Navbar/> */}
        <Home/>
      </div>
  );
}

export default App;
