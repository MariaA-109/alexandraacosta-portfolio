import React from "react";
import "./App.css";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { UilAngleDoubleUp } from "@iconscout/react-unicons";
import ExtraProjects from "./components/ExtraProjects";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Navbar />
      <div>
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        <ExtraProjects id="extraprojects" />
        <Skills id="skills" />
      </div>
      <div className="flex justify-end">
        <button
          onClick={scrollToTop}
          className="fex m-4 btn btn-primary normal-case lg:text-md align-center"
        >
          <UilAngleDoubleUp />
        </button>
      </div>
    </div>
  );
}

export default App;
