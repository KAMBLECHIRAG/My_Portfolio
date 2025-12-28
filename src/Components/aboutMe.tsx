import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBriefcase,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
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
    <section ref={ref} className="py-16 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-4xl font-bold mb-2 text-center md:text-left"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-10 mx-auto md:mx-0"
        ></motion.div>
        {/* Description and Quick Facts */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="flex-1 text-lg"
          >
            <p className="mb-4">
              Frontend Engineer with 1+ of experience developing cross-platform
              mobile applications using Flutter, React Native, and React.js.
              Built production-level applications serving 1000+ users with
              expertise in API integration, search optimization, and responsive
              UI development.
            </p>
          </motion.div>
          {/* Quick Facts Box */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="flex-1 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-md">
              <li className="flex items-start gap-2">
                <p className="text-yellow-300 text-xl">•</p> Electronics &
                Telecommunication Engineering Graduate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl">•</span> Frontend
                Developer at NearLaw
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl ">•</span> Experience
                in React, React Native + Expo & Flutter Development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl ">•</span> Based in
                Mumbai, India
              </li>
            </ul>
          </motion.div>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {/* Location */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-3xl text-blue-600 mb-2"
            />
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-sm text-gray-600">
              {" "}
              Mumbai-400067, Maharashtra, India{" "}
            </p>
          </motion.div>
          {/* Experience */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-3xl text-purple-600 mb-2"
            />
            <h4 className="text-lg font-semibold">Experience</h4>
            <p className="text-sm text-gray-600">1+ Years</p>
          </motion.div>
          {/* Projects */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-3xl text-purple-600 mb-2"
            />
            <h4 className="text-lg font-semibold">Projects</h4>
            <p className="text-sm text-gray-600">2</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
