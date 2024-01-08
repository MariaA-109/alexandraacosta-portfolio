import React from "react";

function Navbar() {
  <script
    src="https://platform.linkedin.com/badges/js/profile.js"
    async
    defer
    type="text/javascript"
  ></script>;

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
    <div className="navbar bg-base-100 p-6 ml-2 mr-2">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 sm:text-sm lg:text-lg">
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
