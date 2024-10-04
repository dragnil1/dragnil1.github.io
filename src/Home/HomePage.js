import React from "react";

import Navbar from "./Sections/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import Research from "./Sections/Research/Research";
import Education from "./Sections/Education/Education";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";
import OpenSourceContribution from "./Sections/OpenSourceContribution/OpenSourceContribution";
import Experience from "./Sections/Experience/Experience";
import TestScores from "./Sections/TestScores/TestScores";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid p-0">
        <Home />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Research />
        <hr class="m-0" />
        <OpenSourceContribution />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <Projects />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <TestScores />
        <hr class="m-0" />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
