import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-2 text-center md:text-left">
          Projects
        </h2>
        <div className="w-24 h-1 bg-green-500 mb-10 mx-auto md:mx-0"></div>

        {/* Work Experience Card */}
        <div className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center mr-4">
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="text-xl text-white"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Nearlaw Mobile Application | Aug 2025{" "}
              </h3>
              <p className="text-sm text-gray-600">NearLaw</p>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Developed cross-platform application using React Native + Expo
              serving 1000+ legal professionals across Android and iOS.
            </li>
            <li>
              Integrated Elasticsearch managing 100k+ documents with advanced
              search and filtering capabilities.
            </li>
            <li>
              Built 10+ advanced user features including bookmarking,
              annotations, and content highlighting functionality.
            </li>
            <li>Built a user friendly responsive UI design.</li>
            <li>
              Took responsibility of building and deploying the app on
              playstore.
            </li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              React Native + Expo
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              TypeScript
            </span>

            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              Tailwind CSS
            </span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
              Redux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
