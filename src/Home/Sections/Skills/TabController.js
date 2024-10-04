import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as Python } from "../../../Files/svg/python.svg";
import { ReactComponent as Bash } from "../../../Files/svg/bash.svg";
import { ReactComponent as Oracle } from "../../../Files/svg/oracle.svg";
import { ReactComponent as Hibernate } from "../../../Files/svg/hibernate.svg";
import { ReactComponent as DotNetCore } from "../../../Files/svg/NET_Core.svg";
import { ReactComponent as CSharp } from "../../../Files/svg/C#.svg";
import { ReactComponent as FSharp } from "../../../Files/svg/F#.svg";
import { ReactComponent as CPP } from "../../../Files/svg/cpp.svg";
import { ReactComponent as JAVA } from "../../../Files/svg/java.svg";
import { ReactComponent as JS } from "../../../Files/svg/JS.svg";
import { ReactComponent as PGSql } from "../../../Files/svg/postgresql.svg";
import { ReactComponent as Django } from "../../../Files/svg/django.svg";
import { ReactComponent as K8 } from "../../../Files/svg/kubernetes.svg";
import { ReactComponent as Linux } from "../../../Files/svg/linux.svg";
import { ReactComponent as Git } from "../../../Files/svg/git.svg";
import { ReactComponent as Pytorch } from "../../../Files/svg/pytorch.svg";
import { ReactComponent as Android } from "../../../Files/svg/android.svg";
import { ReactComponent as AWS } from "../../../Files/svg/aws.svg";
import { ReactComponent as Spring } from "../../../Files/svg/spring-3.svg";
import { ReactComponent as OpenAi } from "../../../Files/svg/openaigym.svg";

import useWindowSize from "../../../Hooks/useWindowSize";
import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabController() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const languages = [
    {
      professional: [
        {
          tool: "Java",
          icon: <JAVA style={{ paddingLeft: "0", marginRight: "2", width: "35px", height: "35px" }} />,
        },
        {
          tool: "C++",
          icon: <CPP style={{ paddingLeft: "4", marginRight: "8", width: "28px", height: "28px" }} />,
        },
        {
          tool: "Javascript",
          icon: <JS style={{ paddingLeft: "4", marginRight: "8", width: "29px", height: "29px" }} />,
        },
      ],
      university: [
        {
          tool: "Python",
          icon: <Python style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />,
        },
      ],
    },
  ];

  const webdev = [
    {
      professional: [
        {
          tool: "Spring Boot",
          icon: <Spring style={{ paddingLeft: "0", marginRight: "4", width: "30px", height: "30px" }} />,
        },
        {
          tool: "Hibernate",
          icon: <Hibernate style={{ paddingLeft: "0", marginRight: "0", width: "35px", height: "35px" }} />,
        },
        {
          tool: "Oracle",
          icon: <Oracle style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />,
        },
      ],
      university: [
        {
          tool: "NodeJS",
          icon: (
            <FontAwesomeIcon
              style={{ paddingLeft: "4", paddingRight: "4", color: "#73B856", width: "35px", height: "35px" }}
              size="2x"
              icon="fa-brands fa-node"
            />
          ),
        },
        {
          tool: "React",
          icon: (
            <FontAwesomeIcon
              style={{ paddingLeft: "4", paddingRight: "8", color: "#00d8ff", width: "32px", height: "32px" }}
              size="2x"
              icon="fa-brands fa-react"
            />
          ),
        },
        {
          tool: "PostgreSQL",
          icon: <PGSql style={{ paddingLeft: "4", paddingRight: "8", width: "40px", height: "40px" }} />,
        },
      ],
    },
  ];

  const devops = [
    {
      professional: [
        {
          tool: "Docker",
          icon: (
            <FontAwesomeIcon
              style={{ paddingLeft: "4", marginRight: "6", width: "30px", height: "30px", color: "#2393E6" }}
              icon="fa-brands fa-docker"
            />
          ),
        },
        {
          tool: "Git",
          icon: <Git style={{ paddingLeft: "2", marginRight: "6", width: "33px", height: "33px" }} />,
        },
        {
          tool: "Linux",
          icon: <Linux style={{ paddingLeft: "4", marginRight: "4", width: "32px", height: "32px" }} />,
        },
      ],
    },
  ];

  const simulation = [
    {
      professional: [
        {
          tool: "Gym",
          icon: (
            <OpenAi
              style={{ paddingLeft: "4", marginRight: "6", width: "30px", height: "30px", color: "#2393E6" }}
              icon="fa-brands fa-docker"
            />
          ),
        },
        {
          tool: "Carla",
          icon: (
            <img
              src={require("../../../Files/imgs/carla.png")}
              style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              alt="Carla"
            ></img>
          ),
        },
      ],
    },
  ];

  const others = [
    {
      intermediate: [
        {
          tool: "Pytorch",
          icon: <Pytorch style={{ padding: "0", marginRight: "4", width: "27px", height: "27px" }} />,
        },
        {
          tool: "Django",
          icon: <Django style={{ paddingLeft: "4", marginRight: "7", width: "37px", height: "37px" }} />,
        },
        {
          tool: "JavaFX",
          icon: (
            <img
              src={require("../../../Files/imgs/javafx.jpg")}
              style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              alt="javafx"
            ></img>
          ),
        },
        {
          tool: "LaTeX",
          icon: (
            <img
              src={require("../../../Files/imgs/latex.png")}
              style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              alt="latex"
            ></img>
          ),
        },
      ],
      novice: [
        {
          tool: "Android Studio",
          icon: <Android style={{ paddingLeft: "1", marginRight: "4", width: "32px", height: "32px" }} />,
        },
        {
          tool: "Bash",
          icon: (
            <Bash
              style={{
                padding: "0",
                margin: "0",
                marginRight: "6",
                width: "30px",
                height: "30px",
              }}
            />
          ),
        },
        {
          tool: "NS3",
          icon: (
            <img
              src={require("../../../Files/imgs/ns3.png")}
              style={{ height: "20px", marginTop: "10px", marginRight: "6px" }}
              alt="ns3"
            ></img>
          ),
        },
        {
          tool: "OpenGL",
          icon: (
            <img
              src={require("../../../Files/imgs/opengl.png")}
              style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              alt="opengl"
            ></img>
          ),
        },
      ],
    },
  ];

  const screenWidth = useWindowSize().width;
  let boxWidth = "100%";
  if (screenWidth > 1250) {
    boxWidth = "75%";
  } else if (screenWidth > 768) {
    boxWidth = "90%";
  }

  return (
    <div class="container">
      <Box sx={{ width: boxWidth }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "#212529",
            boxShadow: 8,
            borderRadius: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{ style: { background: "white", textColor: "white" } }}
          >
            <Tab
              sx={[
                {
                  color: "#d8d8d8",
                  fontWeight: "600",
                },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
                {
                  "@media (max-width:600px)": {
                    fontSize: "calc(0.6em + 0.4vw)", // even smaller base size and scaling factor
                  },
                },
              ]}
              label="Languages"
              {...a11yProps(0)}
            />
            <Tab
              sx={[
                {
                  color: "#d8d8d8",
                  fontWeight: "600",
                },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
                {
                  "@media (max-width:600px)": {
                    fontSize: "calc(0.6em + 0.4vw)", // even smaller base size and scaling factor
                  },
                },
              ]}
              label="WebDev"
              {...a11yProps(0)}
            />
            <Tab
              sx={[
                {
                  color: "#d8d8d8",
                  fontWeight: "600",
                },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
                {
                  "@media (max-width:600px)": {
                    fontSize: "calc(0.6em + 0.4vw)", // even smaller base size and scaling factor
                  },
                },
              ]}
              label="DevOps"
              {...a11yProps(0)}
            />
             <Tab
              sx={[
                {
                  color: "#d8d8d8",
                  fontWeight: "600",
                },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
                {
                  "@media (max-width:600px)": {
                    fontSize: "calc(0.6em + 0.4vw)", // even smaller base size and scaling factor
                  },
                },
              ]}
              label="Simulation"
              {...a11yProps(0)}
            />
            <Tab
              sx={[
                {
                  color: "#d8d8d8",
                  fontWeight: "600",
                },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
                {
                  "@media (max-width:600px)": {
                    fontSize: "calc(0.6em + 0.4vw)", // even smaller base size and scaling factor
                  },
                },
              ]}
              label="Others"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="container py-5">
            <div className="row">
              {languages.map((experience, index) => (
                <React.Fragment key={index}>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Professional Experience</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.professional.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Academic Experience</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.university.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="container py-5">
            <div className="row">
              {webdev.map((experience, index) => (
                <React.Fragment key={index}>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Professional Experience</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.professional.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Academic Experience</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.university.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="container py-5">
            <div className="row">
              {devops.map((experience, index) => (
                <React.Fragment key={index}>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Professional Experience</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.professional.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="container py-5">
            <div className="row">
              {simulation.map((experience, index) => (
                <React.Fragment key={index}>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Research Experience</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.professional.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="container py-5">
            <div className="row">
              {others.map((experience, index) => (
                <React.Fragment key={index}>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Intermediate</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.intermediate.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <h3 className="text-center">Novice</h3>
                    <div className="card shadow">
                      <div className="card-body">
                        {experience.novice.map((exp, i) => (
                          <div key={i}>
                            {exp.icon} <div class="subheading">{exp.tool}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default TabController;
