import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBriefcase,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-2 text-center md:text-left">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-10 mx-auto md:mx-0"></div>

        {/* Description and Quick Facts */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Description */}
          <div className="flex-1 text-lg">
            <p className="mb-4">
              I'm a passionate frontend developer.After graduating in 2023, I've
              been dedicated to creating exceptional digital experiences through
              clean, efficient code and modern development practices.
            </p>
            <p>
              Currently working at NearLaw, I specialize in building responsive
              web applications and mobile solutions using cutting-edge
              technologies like React, Flutter, and React Native + Expo. I
              believe in writing code that not only works but is maintainable
              and scalable.
            </p>
          </div>

          {/* Quick Facts Box */}
          <div className="flex-1 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-white text-md">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl mt-1">•</span>
                Electronics & Telecommunication Engineering Graduate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl mt-1">•</span>
                Frontend Developer at NearLaw
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl mt-1">•</span>
                Experience in React, React Native + Expo & Flutter Development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 text-xl mt-1">•</span>
                Based in Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {/* Location */}
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-md transition">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-3xl text-blue-600 mb-2"
            />
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-sm text-gray-600">
              Mumbai-400067, Maharashtra, India
            </p>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-md transition">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-3xl text-purple-600 mb-2"
            />
            <h4 className="text-lg font-semibold">Experience</h4>
            <p className="text-sm text-gray-600">1+ Years</p>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-md transition">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-3xl text-purple-600 mb-2"
            />
            <h4 className="text-lg font-semibold">Projects</h4>
            <p className="text-sm text-gray-600">2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
