import React from "react";
import animal from "../img/animal.png";
import pokemon from "../img/pokemon.png";
import heyDaisy from "../img/heyDaisy.png";

function Projects() {
  const handleButtonClickLiveDaisy = () => {
    window.open("https://heydaisy-frontend.onrender.com/", "_blank");
  };
  const handleButtonClickLivePokemon = () => {
    window.open("https://pokefight-wbs-wdg10.netlify.app/", "_blank");
  };
  const handleButtonClickLiveAnimal = () => {
    window.open("https://main--fancy-cuchufli-e21b53.netlify.app/", "_blank");
  };
  const handleButtonClickPokemon = () => {
    window.open("https://github.com/MariaA-109/pokefight-frontend", "_blank");
  };
  const handleButtonClickAnimal = () => {
    window.open("https://github.com/MariaA-109/th-vermittlung", "_blank");
  };
  const handleButtonClickDaisy = () => {
    window.open("https://github.com/MariaA-109/heyDaisy-frontend", "_blank");
  };

  return (
    <div className="">
      <div className="text-4xl p-2 m-8">
        <div className="flex items-center">
          <span id="projects">PROJECTS</span>
          <div className="flex-grow border-t-2"></div>
        </div>
      </div>
      <div className="lg:pl-16 lg:pr-16">
        <div className="py-8">
          <div className=" lg:grid lg:grid-cols-2 lg:m-8 sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap md:justify-center">
            <div className="flex justify-end bg-base-100 shadow-xl lg:mr-4 md:w-fit md:h-72">
              <img
                src={heyDaisy}
                alt="heyDaisy"
                className="rounded-md w-fit max-h-96"
              ></img>
            </div>
            <div className="flex card w-fit max-h-96 bg-base-100 shadow-xl align-center md:h-72 lg:ml-4">
              <div className="card-body">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block w-fit p-1">
                  <h2 className="relative card-title"> heyDaisy </h2>
                </span>
                <p className="text-justify text-xs md:text-sm lg:text-sm">
                  is a language learning app that prioritizes community and
                  events. Users can create profiles with their personal
                  information and language learning preferences. They can then
                  connect with others through chat or join planned events to
                  improve their language skills. heyDaisy offers a dynamic and
                  engaging environment for language learners to interact and
                  learn together.
                </p>
                <div className="card-actions justify-end">
                  <div className="btn-container flex">
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
        </div>
        <div className="py-8">
          <div className="lg:grid lg:grid-cols-2 lg:m-8 sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap md:justify-center ">
            <div className="flex justify-end bg-base-100 shadow-xl lg:mr-4 md:w-full md:h-72">
              <img
                src={pokemon}
                alt="pokefight"
                className="rounded-md w-full max-h-96 "
              ></img>
            </div>
            <div className="flex card w-fit max-h-96 bg-base-100 shadow-xl align-center md:h-72 lg:ml-4">
              <div className="card-body md:h-80">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block w-fit p-1">
                  <h2 className="relative card-title"> Pokefight </h2>
                </span>
                <p className="text-justify text-sm md:text-base lg:text-base">
                  is an immersive and engaging application that integrates data
                  from two APIs to provide users with comprehensive information
                  about their favorite Pokémon. With access to extensive stats,
                  movesets, and abilities, trainers can strategize and build
                  their ultimate team for thrilling battles.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClickLivePokemon}
                  >
                    LIVE
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClickPokemon}
                  >
                    CODE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className=" lg:grid lg:grid-cols-2 lg:m-8 sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap md:justify-center">
            <div className="flex justify-end bg-base-100 shadow-xl lg:mr-4  md:w-full md:h-72">
              <img
                src={animal}
                alt="animal-shelter"
                className="rounded-md w-full max-h-96 "
              ></img>
            </div>
            <div className="flex card w-fit max-h-96 bg-base-100 shadow-xl align-center md:h-72 lg:ml-4">
              <div className="card-body md:w-full md:h-80 ">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block w-fit p-1">
                  <h2 className="relative card-title"> Happy Tails Haven</h2>
                </span>
                <p className="text-justify">
                  is an animal shelter website developed using React and
                  Contentful, with MongoDB integration. This platform aims to
                  streamline the adoption process for dogs, rodents, birds, and
                  cats, offering a user-friendly interface for potential
                  adopters. Visitors can explore detailed animal profiles, read
                  heartwarming stories, and view adorable photos.
                </p>
                <div className="card-actions justify-end">
                  <button
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
