import React from "react";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
  const handleEmailClick = () => {
    const email = "acosta.alexandra@outlook.com";
    window.location.href = `mailto:${email}`;
  };

  const handleProjectBtn = () => {
    const projectSection = document.getElementById("projects");
    projectSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["web development :) "],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center hero min-h-[68vh] m-2">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="relative text-5xl font-bold">
              Hi, I am
              <span className="ml-1 mr-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-100 relative inline-block">
                <span className="relative"> Alexandra</span>
              </span>
            </h1>

            <p className="text-3xl py-6 leading-normal">
              and I made a career change to web development :)
            </p>
            <span className="text-3xl py-6" ref={el}></span>
            <div className="flex w-full mt-8 mb-8 justify-center">
              <Link
                to="https://www.linkedin.com/in/alexandra-acosta-aviles/"
                target="_blank"
              >
                <UilLinkedin
                  size={30}
                  className="hover:scale-125 transition-all"
                />
              </Link>

              <div className="divider divider-horizontal"></div>
              <button onClick={handleEmailClick}>
                <UilEnvelopeAlt
                  size={30}
                  className="hover:scale-125 transition-all"
                />
              </button>
              <div className="divider divider-horizontal"></div>
              <Link
                to="https://github.com/MariaA-109?tab=repositories"
                target="_blank"
              >
                <UilGithub
                  size={30}
                  className="hover:scale-125 transition-all"
                />
              </Link>
            </div>
            <button
              className="btn btn-primary hover:scale-105 transition-all"
              onClick={handleProjectBtn}
            >
              See projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
