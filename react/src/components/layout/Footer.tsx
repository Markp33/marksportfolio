import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* Left section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">
            Interested in working together<span className="text-purple-600">?</span>
          </h2>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition">
              Get In Touch
            </button>
            <button className="border-2 border-gray-800 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-100 transition">
              Browse Projects
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <div className="flex gap-4 text-gray-800 text-xl">
            <a href="https://www.instagram.com/markpetrrnk/" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Markp33" aria-label="GitHub"><FaGithub /></a>
          </div>
          <p className="text-sm text-gray-600">
            ©2025 All Rights Reserved.<br />
            <span className="text-purple-600">Made</span> by Mark Petrenko
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
