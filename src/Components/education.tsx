import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
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
          Education
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-blue-500 mb-10 mx-auto md:mx-0"
        ></motion.div>

        {/* Education Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex justify-center items-center mr-4">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-xl text-white"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Engineering</h3>
              <p className="text-sm text-gray-600">
                Electronics & Telecommunication Engineering
              </p>
            </div>
            <span className="ml-auto bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm">
              Graduated
            </span>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-sm text-gray-600">
              Atharva College of Engineering
            </p>
            <span className="ml-4 text-sm text-gray-600">
              Graduated in 2023
            </span>
            <span className="ml-4 text-sm text-gray-600">Malad, Mumbai</span>
          </div>
          <p className="mb-4">
            Completed my Bachelor's degree in Electronics and Telecommunication
            Engineering from Atharva College of Engineering, one of Mumbai's
            premier engineering institutions. The program provided me with a
            strong foundation in engineering principles, problem-solving, and
            analytical thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
