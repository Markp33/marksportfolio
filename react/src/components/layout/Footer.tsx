import { FaInstagram, FaLinkedin, FaGithub,} from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">
            Interested in working together<span className="text-purple-600">?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/contact">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                Get In Touch
              </button>
            </a>

            <a href="/projects">
              <button className="border-2 border-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
                Browse Projects
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <div className="flex gap-4 text-gray-800 text-xl">
            <a href="https://www.instagram.com/markpetrrnk/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mark-petrenko-3671a4373/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Markp33" aria-label="GitHub"><FaGithub /></a>
            <a
              href="/CV.pdf"
              aria-label="CV"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-base ml-2"
            >
              CV
              <MdOutlineArrowOutward className="text-lg" />
            </a>
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
