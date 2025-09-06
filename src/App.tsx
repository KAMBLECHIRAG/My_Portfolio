// src/App.tsx
import React from "react";
import Header from "./Components/header";
import About from "./Components/aboutMe";
import Skills from "./Components/skills";
import WorkExperience from "./Components/workExperience";
import Education from "./Components/education";
import Contact from "./Components/contact";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
