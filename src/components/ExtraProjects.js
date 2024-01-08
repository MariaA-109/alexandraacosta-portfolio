import React from "react";
import hairstudio from "../img/hairstudio.png";
import tajam from "../img/tajam.png";
import boda from "../img/boda.png";

function ExtraProjects() {
  return (
    <div>
      <div className="text-2xl p-2 m-8 md:text-3xl lg:text-3xl">
        <div className="flex items-center">
          <span id="projects">OTHER PROJECTS</span>
          <div className="flex-grow border-t ml-2 border-divider"></div>
        </div>
      </div>
      <div className="flex justify-center py-8 h-44 md:h-auto lg:h-auto">
        <div className="carousel rounded-box w-3/4 ">
          <div className="carousel-item w-1/2">
            <img src={hairstudio} alt="cookbook" className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={boda} alt="PSD" className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={tajam} alt="PSD" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraProjects;
