import React from "react";

import cookbook from "../img/cookbook.png";
import tajam from "../img/tajam.png";
import planner from "../img/daily.png";

function ExtraProjects() {
  return (
    <div>
      <div className="text-2xl p-2 m-8 md:text-3xl lg:text-3xl">
        <div className="flex items-center">
          <span id="projects">EXTRA PROJECTS</span>
          <div className="flex-grow border-t ml-2 border-divider"></div>
        </div>
      </div>
      <div className="flex justify-center py-8 h-44 md:h-auto lg:h-auto">
        <div className="carousel rounded-box w-3/4 ">
          <div className="carousel-item w-1/2">
            <img src={cookbook} alt="cookbook" className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={tajam} alt="PSD" className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={planner} alt="daily-planner" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraProjects;
