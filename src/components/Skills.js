import React from "react";

function Skills() {
  return (
    <div>
      <div>
        <div className="text-2xl p-2 m-8 md:text-3xl lg:text-3xl">
          <div className="flex items-center">
            <span id="skills">SKILLS</span>

            <div className="flex-grow border-t border-divider"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 p-8 justify-center">
          <div className="badge badge-primary">Bootstrap</div>
          <div className="badge badge-primary">Tailwindcss</div>
          <div className="badge badge-primary">daisyUI</div>
          <div className="badge badge-primary">Responsive Webdesign</div>
          <div className="badge badge-primary">MongoDB</div>
          <div className="badge badge-primary">Node.js</div>
          <div className="badge badge-primary">Express</div>
          <div className="badge badge-primary">UX & UI Design</div>
          <div className="badge badge-primary">Firebase</div>
          <div className="badge badge-primary">SQL</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
