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
    tags: ["Java", "JavaScript", "TypeScript", "Dart"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-2">Skills & Technologies</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-lg mb-12">
          Here are the technologies and tools I work with to bring ideas to life
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, idx) => (
            <div
              key={idx}
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
            </div>
          ))}
        </div>

        {/* Always Learning */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg">
            I'm constantly exploring new technologies and frameworks to stay
            current with industry trends. Currently diving deeper into advanced
            React patterns, state management to enhance my development
            capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
