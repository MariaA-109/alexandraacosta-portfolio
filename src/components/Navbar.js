import React from "react";
import { UilImport } from "@iconscout/react-unicons";

function Navbar() {
  const handleAboutBtn = () => {
    const projectSection = document.getElementById("about");
    projectSection.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleProjectBtn = () => {
    const projectSection = document.getElementById("projects");
    projectSection.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleSkillsBtn = () => {
    const projectSection = document.getElementById("skills");
    projectSection.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="navbar bg-base-100 m-4">
      <div className="flex-1">
        <a
          href="/CV-Acosta.pdf"
          download
          className="btn btn-primary normal-case text-lg"
        >
          <UilImport size={18} /> Resume
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li className="ml-2">
            <button onClick={handleAboutBtn} className="btn-secondary">
              About
            </button>
          </li>
          <li className="ml-2">
            <button onClick={handleProjectBtn} className="btn-secondary">
              Projects
            </button>
          </li>
          <li className="ml-2">
            <button onClick={handleSkillsBtn} className="btn-secondary">
              Skills
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
