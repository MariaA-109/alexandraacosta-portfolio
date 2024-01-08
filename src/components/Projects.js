import React from "react";
import inconstruction from "../img/inconstruction.png";
import heyDaisy from "../img/heyDaisy.png";
import weather from "../img/weather.png";

function ProjectCard({
  title,
  description,
  badges,
  liveLink,
  codeLink,
  imgSrc,
}) {
  const handleLiveButtonClick = () => {
    window.open(liveLink, "_blank");
  };

  const handleCodeButtonClick = () => {
    window.open(codeLink, "_blank");
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl m-4">
      <div className="flex justify-end">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-t-md w-80 h-40 object-cover"
        ></img>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-justify text-sm">{description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-primary">
              {badge}
            </div>
          ))}
        </div>
        <div className="card-actions mt-4">
          {liveLink && (
            <button
              className="btn btn-primary mr-2"
              onClick={handleLiveButtonClick}
            >
              LIVE
            </button>
          )}
          {codeLink && (
            <button className="btn btn-primary" onClick={handleCodeButtonClick}>
              CODE
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projectsData = [
    {
      title: "Wandace",
      description:
        "SAAS solution focused on optimizing content and inventory management for e-commerce. Specializing in providing scalable solutions to meet the unique needs of retail environments. Point-of-sale programming for seamless retail transactions.",
      badges: ["React.js", "Next.js", "Typescript", "GraphQL"],
      liveLink: null,
      codeLink: null,
      imgSrc: inconstruction,
    },
    {
      title: "heyDaisy",
      description:
        "A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can then connect with others through chat or join planned events to improve their language skills.",
      badges: ["React.js", "daisyUI", "MongoDB", "Firebase"],
      liveLink: "https://heydaisy-frontend.onrender.com/",
      codeLink: "https://github.com/MariaA-109/heyDaisy-frontend",
      imgSrc: heyDaisy,
    },
    {
      title: "Weather App",
      description:
        "A basic weather app developed with React and Tailwind CSS. The background color changes according to the temperature of the city you are looking for.",
      badges: ["React.js", "Tailwind CSS", "API"],
      liveLink: "https://weather-app-colors.netlify.app",
      codeLink: "https://github.com/MariaA-109/weatherapp-react",
      imgSrc: weather,
    },
  ];

  return (
    <div className="p-4">
      <div className="text-2xl p-2 m-4 md:text-3xl lg:text-3xl">
        <div className="flex items-center">
          <span id="projects">PROJECTS</span>
          <div className="flex-grow border-t ml-2 border-divider"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
