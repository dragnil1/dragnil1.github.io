import React from "react";

import useWindowSize from "../../../Hooks/useWindowSize";

import LargeScreen from "./LargeScreen";
import MediumScreen from "./MediumScreen";
import MobileScreen from "./MobileScreen";

function Projects() {
  const projects = [
    {
      name: "Autonomous Driving using Imitation Learning",
      imgName: "imitation.png",
      tech: { python: true, pytorch: true },
      gitlink: "https://github.com/dragnil1/Autonomous-Driving-using-Imitation-Learning",
      videolink: "",
      description: "Created an Autonomous Driving agent using Imitation Learning (4th year)",
    },
    {
      name: "MIPS MicroProcessor",
      imgName: "Pipeline_MIPS.png",
      tech: { cpp: false},
      gitlink: "https://github.com/dragnil1/CSE306",
      videolink: "",
      description: "Designed and implemented an 8-bit processor that supports a pipelined datapath for a subset of MIPS instruction set (3rd year)",
    },
    {
      name: "C Compiler",
      imgName: "abstract-syntax-tree.png",
      tech: { cpp: true},
      gitlink: "https://github.com/dragnil1/CSE310",
      videolink: "",
      description: "Implemented the Frontend of a C Compiler using C++, Flex and Bison (3rd year)",
    },
    {
      name: "Spacey",
      imgName: "spacey.png",
      tech: { js: true, react: true, node: true},
      gitlink: "https://github.com/dragnil1/mern-spacey",
      description:
        "Spacey is an online rental website that lets property owners to rent their places or free spaces to stay or use and also helps travelers to find a home to stay.",
    },
    {
      name: "Rokomari",
      imgName: "rokomari.png",
      tech: { python: true, django: true, bootstrap: true },
      gitlink: "https://github.com/dragnil1/Rokomari",
      description:
        "E-Commerce Website for buying and selling similar to Rokomari developed for Database Systems course (2nd year)",
    },
    {
      name: "RayTracing",
      imgName: "ray-tracing.jpeg",
      tech: { cpp: true, opengl: true },
      gitlink: "https://github.com/dragnil1/computer-graphics",
      videolink: "",
      description: "A math-heavy assignment of Computer Graphics course that I really enjoyed (4th year)",
    },
  ];

  const screenWidth = useWindowSize().width;

  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="projects">
        <div class="resume-section-content">
          <h2 class="mb-5">Projects </h2>
          <div class="container">
            {screenWidth > 1250 ? (
              <LargeScreen projects={projects} />
            ) : screenWidth > 768 ? (
              <MediumScreen projects={projects} />
            ) : (
              <MobileScreen projects={projects} />
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
