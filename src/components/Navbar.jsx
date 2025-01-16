import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="flex justify-center mb-5">
      <ul className="flex space-x-8 custom-dark-bg p-3 pt-2 w-min mt-8 rounded-xl">
        <li className="group relative text-white cursor-pointer">
          <HomeOutlinedIcon />
          <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Home
          </span>
        </li>
        <li className="group relative text-white cursor-pointer">
          <FolderOpenOutlinedIcon />
          <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Projects
          </span>
        </li>
        <li className="group relative text-white cursor-pointer">
          <BuildOutlinedIcon />
          <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Skills
          </span>
        </li>
        <li className="group relative text-white cursor-pointer">
          <BorderColorOutlinedIcon />
          <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Blog
          </span>
        </li>
        <li className="group relative text-white cursor-pointer">
          <ConnectWithoutContactOutlinedIcon />
          <span className="text-xs absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
