import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 px-4 text-center"
    >
      {/* Profile Initials Circle */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="w-28 h-28 rounded-full bg-black border-4 border-yellow-400 flex items-center justify-center mb-6"
      >
        <span className="text-3xl font-bold text-white">CK</span>
      </motion.div>
      {/* Name */}
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        className="text-5xl font-extrabold text-yellow-300 mb-2"
      >
        Chirag Kamble
      </motion.h1>
      {/* Title */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ delay: 0.4 }}
        className="text-xl text-white mb-4"
      >
        Frontend Developer & Mobile App Developer
      </motion.h2>
      {/* Description */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ delay: 0.6 }}
        className="max-w-2xl text-white text-md mb-6"
      >
        Passionate about creating beautiful, responsive web applications and
        mobile experiences. Currently working at NearLaw, bringing ideas to life
        through code.
      </motion.p>
      {/* CTA and Input */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <a
          href="#contact"
          className="bg-white text-blue-600 px-5 py-2 rounded-md flex items-center justify-center gap-2 font-medium shadow-md hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
        </a>
        <a
          href="https://docs.google.com/document/d/1qHBU5pZ8uglECGgqfKEQvqzCc_drU8Z0/edit?usp=sharing&ouid=116163341806063778679&rtpof=true&sd=true"
          download
          className="bg-yellow-400 text-black px-5 py-2 rounded-md font-medium shadow-md hover:bg-yellow-300 transition"
          target="_blank"
        >
          Download Resume
        </a>
      </motion.div>
      {/* Social Links */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ delay: 1 }}
        className="flex gap-6 mb-6 text-2xl"
      >
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
      </motion.div>
    </div>
  );
};

export default Header;
