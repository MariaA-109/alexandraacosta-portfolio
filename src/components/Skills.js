import React from "react";

function Skills() {
  return (
    <div>
      <div className="text-4xl px-1 ">
        <div className="p-2 m-10 text-2xl md:text-4xl lg:text-4xl">
          <div className="flex items-center">
            <span className="mx-2" id="skills">
              SKILLS
            </span>

            <div className="flex-grow border-t border-divider"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 p-8 justify-center">
          <div className="badge badge-primary">Bootstrap</div>
          <div className="badge badge-primary">Tailwind</div>
          <div className="badge badge-primary">daisyUI</div>
          <div className="badge badge-primary">Responsive Webdesign</div>
          <div className="badge badge-primary">MongoDB</div>
          <div className="badge badge-primary">Node.js</div>
          <div className="badge badge-primary">Express.js</div>
          <div className="badge badge-primary">UX & UI Design</div>
          <div className="badge badge-primary">Firebase</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
