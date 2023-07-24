import React from "react";
import portfolio from "../img/portfolio.jpg";
import { UilGithub } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilHtml5 } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";

function About() {
  return (
    <div>
      <div className="text-4xl p-2 m-8">
        <div className="flex items-center">
          <span id="about">ABOUT</span>
          <span className="mx-2">ME</span>
          <div className="flex-grow border-t-2"></div>
        </div>
      </div>
      <div className="hero min-h-[70vh] p-4">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={portfolio}
            className="max-w-[25vw] rounded-lg shadow-2xl"
            alt="img-portfolio"
          />
          <div>
            <p className="p-6 text-sm text-justify md:text-base lg:text-lg leading-8 md:leading-10 lg:leading-10  lg:text-justify md:text-justify">
              With a background in
              <span class="ml-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-50 relative inline-block">
                <span class="relative"> social studies, </span>
              </span>
              I am transitioning into coding to pursue a career as a Full Stack
              web and application developer.
              <br></br>I am driven to solve problems and actively learn various
              programming languages, frameworks and tools to create dynamic and
              user-friendly websites and applications.
              <br></br> My social studies background equips me with valuable
              skills in research, critical thinking, and effective
              communication. Currently, I am looking for a new challenge as a
              <span class="ml-1 mr-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-50 relative inline-block">
                <span class="relative"> Full Stack Web Developer </span>
              </span>
              and I am open to work hybrid or remote.
            </p>
            <h3 className="text-md md:text-xl lg:text-xl font-bold p-4">
              Technologies I've been working with:
            </h3>
            <div className="flex flex-wrap gap-6 p-6 justify-left">
              <div className="badge badge-primary">
                <UilJavaScript className="m-1" />
                JavaScript
              </div>
              <div className="badge badge-primary">
                <UilReact className="m-1" />
                React.js
              </div>
              <div className="badge badge-primary">
                <UilHtml5 className="m-1" /> HTML5
              </div>
              <div className="badge badge-primary">
                <UilCss3Simple className="m-1" />
                CSS
              </div>
              <div className="badge badge-primary">
                <UilGithub className="m-1" /> Git & GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
