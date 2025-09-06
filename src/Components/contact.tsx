import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-10 text-white font-sans"
      id="contact"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto my-3 rounded-full"></div>
        <p className="text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, projects, or just
          having a friendly chat about technology.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="mb-8 text-sm text-gray-200">
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I'd love to hear from you. Let's create something
            amazing together!
          </p>

          <div className="space-y-6">
            <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-xl">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-xl"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-base font-medium">kamblechirag0@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-xl">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-white text-xl"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">Location</p>
                <p className="text-base font-medium">
                  448/13 Navjeevan Society Sector 4, Charkop Kandivali West,
                  Mumbai-400067, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-xl">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-white text-xl"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">Mobile</p>
                <p className="text-base font-medium">+91-9167973889</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-10">
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

        {/* Right Side */}
        <div className="bg-white bg-opacity-10 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
            <textarea
              rows={4}
              id="message"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-3 rounded flex justify-center items-center gap-2 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Chirag Kamble.
      </footer>
    </div>
  );
}
