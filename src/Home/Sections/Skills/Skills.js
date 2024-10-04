import React from "react";

import TabController from "./TabController";

function Skills() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <TabController />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Skills;
