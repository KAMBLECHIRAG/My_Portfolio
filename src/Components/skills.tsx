import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPaintBrush,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    title: "Frontend Development",
    icon: faCode,
    color: "bg-blue-100 text-blue-600",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React + Vite",
      "Tailwind CSS",
    ],
  },
  {
    title: "Mobile Development",
    icon: faMobileAlt,
    color: "bg-green-100 text-green-600",
    tags: ["Flutter", "Dart", "React Native + Expo"],
  },
  {
    title: "Design & Styling",
    icon: faPaintBrush,
    color: "bg-purple-100 text-purple-600",
    tags: [
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Principles",
    ],
  },
  {
    title: "Programming",
    icon: faDatabase,
    color: "bg-orange-100 text-orange-600",
    tags: ["JavaScript", "TypeScript", "Dart"],
  },
];

export default function Skills() {
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
    <section ref={ref} className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-4xl font-bold mb-2"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
        ></motion.div>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="text-lg mb-12"
        >
          Here are the technologies and tools I work with to bring ideas to life
        </motion.p>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.6 + idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl ${skill.color}`}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <h3 className="font-semibold text-xl mb-4">{skill.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Always Learning */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-10 shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg">
            I'm constantly exploring new technologies and frameworks to stay
            current with industry trends. Currently diving deeper into advanced
            React patterns, state management to enhance my development
            capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
