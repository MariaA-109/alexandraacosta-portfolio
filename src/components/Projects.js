import React from "react";

import inconstruction from "../img/inconstruction.png";
import heyDaisy from "../img/heyDaisy.png";
import weather from "../img/weather.png";

function Projects() {
  const handleButtonClickLiveDaisy = () => {
    window.open("https://heydaisy-frontend.onrender.com/", "_blank");
  };

  // const handleButtonClickLiveAnimal = () => {
  //   window.open("https://main--fancy-cuchufli-e21b53.netlify.app/", "_blank");
  // };
  const handleButtonClickLiveWeather = () => {
    window.open("https://weather-app-colors.netlify.app", "_blank");
  };

  // const handleButtonClickAnimal = () => {
  //   window.open("https://github.com/MariaA-109/th-vermittlung", "_blank");
  // };
  const handleButtonClickDaisy = () => {
    window.open("https://github.com/MariaA-109/heyDaisy-frontend", "_blank");
  };
  const handleButtonClickWeather = () => {
    window.open("https://github.com/MariaA-109/weatherapp-react", "_blank");
  };

  return (
    <div className="p-4">
      <div className="text-2xl p-2 m-4 md:text-3xl lg:text-3xl">
        <div className="flex items-center">
          <span id="projects">PROJECTS</span>
          <div className="flex-grow border-t ml-2 border-divider"></div>
        </div>
      </div>
      <div className="lg:pl-16 lg:pr-16">
        <div className="py-8 lg:max-w-screen-xl lg:m-auto">
          <div className=" lg:grid lg:grid-cols-2 lg:m-8 sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap md:justify-center">
            <div className="flex justify-end bg-base-100 shadow-xl lg:mr-4  md:w-full md:h-72">
              <img
                src={inconstruction}
                alt="under-construction"
                className="rounded-md w-full max-h-96 "
              ></img>
            </div>
            <div className="card w-fit max-h-96 bg-base-100 shadow-xl align-center md:h-72 lg:ml-4">
              <div className="card-body w-fit max-h-96 md:h-72 lg:ml-2 p-4">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block w-fit p-1">
                  <h2 className="relative card-title"> Wandace</h2>
                </span>
                <p className="text-justify text-sm md:text-base lg:text-base">
                  SAAS solution focused on optimizing content and inventory
                  management for e-commerce. Specializing in providing scalable
                  solutions to meet the unique needs of retail environments.
                  Point-of-sale programming for seamless retail transactions.
                </p>
                <div className="flex flex-wrap gap-1 justify-start">
                  <div className="badge badge-primary">React.js</div>
                  <div className="badge badge-primary">Next.js</div>
                  <div className="badge badge-primary">Typescript</div>
                  <div className="badge badge-primary">GraphQL</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Not live yet</button>

                  {/* <button
                    className="btn btn-primary"
                    onClick={handleButtonClickLiveAnimal}
                  >
                    LIVE
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClickAnimal}
                  >
                    CODE
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 lg:max-w-screen-xl lg:m-auto md:min-w-screen-sm">
          <div className="lg:grid lg:grid-cols-2 lg:m-8 sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap md:justify-center">
            <div className="flex justify-end bg-base-100 shadow-xl lg:mr-4 md:h-72 lg:w-full lg:h-auto lg:mt-4">
              <img
                src={heyDaisy}
                alt="heyDaisy"
                className="rounded-md w-full max-h-96"
              ></img>
            </div>

            <div className="card w-fit max-h-96 bg-base-100 shadow-xl align-center md:h-72 lg:ml-4">
              <div className="card-body w-fit max-h-96 md:h-72 lg:ml-2 p-4">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block w-fit p-1">
                  <h2 className="relative card-title"> heyDaisy </h2>
                </span>
                <p className="text-justify text-sm md:text-base lg:text-base">
                  is a language learning app that prioritizes community and
                  events. Users can create profiles with their personal
                  information and language learning preferences. They can then
                  connect with others through chat or join planned events to
                  improve their language skills.
                </p>
                <div className="flex flex-wrap gap-1 justify-start">
                  <div className="badge badge-primary">React.js</div>
                  <div className="badge badge-primary">daisyUI</div>
                  <div className="badge badge-primary">MongoDB</div>
                  <div className="badge badge-primary">Firebase</div>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary md:w-auto mr-2"
                    onClick={handleButtonClickLiveDaisy}
                  >
                    LIVE
                  </button>
                  <button
                    className="btn btn-primary md:w-auto"
                    onClick={handleButtonClickDaisy}
                  >
                    CODE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 lg:max-w-screen-xl lg:m-auto">
          <div className="lg:grid lg:grid-cols-2 lg:m-8 sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap md:justify-center ">
            <div className="flex justify-end bg-base-100 shadow-xl lg:mr-4 md:w-full md:h-72">
              <img
                src={weather}
                alt="weater-app"
                className="rounded-md w-full max-h-96 "
              ></img>
            </div>
            <div className="flex card w-fit max-h-96 bg-base-100 shadow-xl align-center md:h-72 lg:ml-4">
              <div className="card-body w-fit max-h-96 md:h-72 lg:ml-2 p-4">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block w-fit p-1">
                  <h2 className="relative card-title"> Weather App </h2>
                </span>
                <p className="text-justify text-sm md:text-base lg:text-base">
                  is a basic weather app developed with react and tailwindcss.
                  The background color changes according to the temperature of
                  the city you are looking for.
                </p>
                <div className="flex flex-wrap gap-1 justify-start">
                  <div className="badge badge-primary">React.js</div>
                  <div className="badge badge-primary">Tailwindcss</div>
                  <div className="badge badge-primary">API</div>
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClickLiveWeather}
                  >
                    LIVE
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClickWeather}
                  >
                    CODE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

/*<div>
   <div className="badge badge-primary">React.js</div>
   <div className="badge badge-primary">Node.js</div>
   <div className="badge badge-primary">MongoDB</div>
   <div className="badge badge-primary">Firebase</div>
   <div className="badge badge-primary">Tailwindcss</div>
   <div className="badge badge-primary">daisyUI</div>
 </div>;*/
