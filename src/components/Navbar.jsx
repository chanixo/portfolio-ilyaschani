import logo from "../assets/IC.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
    return (
      <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Media Icons */}
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ilyas-chani-8064b4270/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/chanixo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ilyass_chani/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;