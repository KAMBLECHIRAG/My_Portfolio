import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function WorkExperience() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-2 text-center md:text-left">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-blue-500 mb-10 mx-auto md:mx-0"></div>

        {/* Work Experience Card */}
        <div className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center mr-4">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-xl text-white"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <p className="text-sm text-gray-600">NearLaw</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-xl text-purple-600 mr-2"
            />
            <p className="text-sm text-gray-600">March 2024 - Present</p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-xl text-purple-600 ml-4 mr-2"
            />
            <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
          </div>
          <p className="mb-4">
            Working as a Frontend Developer at NearLaw, where I contribute to
            building innovative legal technology solutions. My role involves
            developing responsive web applications and mobile solutions that
            enhance user experience and streamline legal processes.
          </p>
          <h4 className="text-lg font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Developed 3 cross-platform mobile applications serving 1000+
              active users using Flutter, React Native, and React.js.
            </li>
            <li>
              Implemented Elasticsearch integration handling 100K document
              searches with optimized query performance.
            </li>
            <li>
              Engineered complex JSON data parsing systems processing data
              fields for dynamic content rendering.
            </li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              React
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              React Native + Expo
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              TypeScript
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              Flutter
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              Dart
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              HTML/CSS
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              Bootstrap
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
