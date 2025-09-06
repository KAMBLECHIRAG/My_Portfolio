// src/components/Footer.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 px-4 text-center">
      {/* Profile Initials Circle */}
      <div className="w-28 h-28 rounded-full bg-black border-4 border-yellow-400 flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-white">CK</span>
      </div>

      {/* Name */}
      <h1 className="text-5xl font-extrabold text-yellow-300 mb-2">
        Chirag Kamble
      </h1>

      {/* Title */}
      <h2 className="text-xl text-white mb-4">
        Frontend Developer & Mobile App Developer
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-white text-md mb-6">
        Passionate about creating beautiful, responsive web applications and
        mobile experiences. Currently working at NearLaw, bringing ideas to life
        through code.
      </p>

      {/* CTA and Input */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <a
          href="#contact"
          className="bg-white text-blue-600 px-5 py-2 rounded-md flex items-center justify-center gap-2 font-medium shadow-md hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Get In Touch
        </a>

        <a
          href="https://drive.google.com/file/d/1Wik5o2KUAN-cEcMIZ93as2bq0poZvRZp/view?usp=sharing"
          download
          className="bg-yellow-400 text-black px-5 py-2 rounded-md font-medium shadow-md hover:bg-yellow-300 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mb-6 text-2xl">
        <a
          href="https://github.com/KAMBLECHIRAG"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl cursor-pointer hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/chirag-kamble/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl cursor-pointer hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:kamblechirag0@email.com"
          className="text-2xl cursor-pointer hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Header;
