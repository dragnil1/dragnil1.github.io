import React from "react";
import Link from "@mui/material/Link";

import { ReactComponent as DotNetCore } from "../../../Files/svg/NET_Core.svg";
import { ReactComponent as CSharp } from "../../../Files/svg/C#.svg";
import { ReactComponent as FSharp } from "../../../Files/svg/F#.svg";
import { ReactComponent as SQLServer } from "../../../Files/svg/SQL_Server.svg";

function Experience() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div
              class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
              style={{ marginRight: "12px", marginLeft: "12px" }}
            >
              <div class="flex-grow-1">
                <h3 class="mb-0">
                  Software Engineer at{" "}
                  <Link target="_blank" rel="noopener noreferrer" href="https://therapbd.com/">
                    {" "}
                    Therap BD
                  </Link>
                </h3>
                {/* <DotNetCore style={{ paddingLeft: "0", marginRight: "4", width: "30px", height: "30px" }} />
                <CSharp style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />
                <FSharp style={{ paddingLeft: "0", marginRight: "4", width: "35px", height: "35px" }} />
                <SQLServer style={{ paddingLeft: "0", marginRight: "0", width: "35px", height: "35px" }} /> */}
                {/* <br /> */}
                <br />
                <p>
                Therap provides Software as a Service (SaaS) to government and private organizations globally
                that serve people with intellectual and developmental disabilities. My work includes:
                  <ul style={{ marginTop: "10px" }}>
                    <li>
                      Executing software development projects from conception to deployment.
                    </li>
                    <li>
                      Ensuring ADA and HIPAA compliance using Java 8, JEE, Spring, Hibernate, Oracle DB, and
                      Weblogic Server, guaranteeing robust functionality and data protection.
                    </li>
                    <li>
                    Adding new features and fixing bugs to ensure a smooth user experience.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2023 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </React.Fragment>
  );
}

export default Experience;
