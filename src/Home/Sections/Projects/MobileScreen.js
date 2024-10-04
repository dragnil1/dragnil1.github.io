import React from "react";
import ProjectCard from "./ProjectCard";
import IconButton from "@mui/material/IconButton";

function MobileScreen(props) {
  return (
    <React.Fragment>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[0]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[1]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[2]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[3]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[4]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[5]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          {/* <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[6]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[7]} width="21rem" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000000">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div class="col-12">
                  <ProjectCard project={props.projects[8]} width="21rem" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <IconButton
          sx={[
            {
              width: 40,
              height: 40,
              marginTop: "20px",
              borderRadius: 0,
              border: "1px solid",
              backgroundColor: "#3367b4",
              color: "white",
              borderColor: "primary.main",
              boxShadow: 8,
              marginLeft: "8px",
            },
            () => ({
              "&:hover": {
                backgroundColor: "#3296FD",
              },
            }),
          ]}
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i class="fa fa-arrow-left"></i>
        </IconButton>
        <IconButton
          sx={[
            {
              width: 40,
              height: 40,
              marginTop: "20px",
              borderRadius: 0,
              border: "1px solid",
              backgroundColor: "#3367b4",
              color: "white",
              borderColor: "primary.main",
              boxShadow: 8,
              marginLeft: "8px",
            },
            () => ({
              "&:hover": {
                backgroundColor: "#3296FD",
              },
            }),
          ]}
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i class="fa fa-arrow-right"></i>
        </IconButton>
      </div>
    </React.Fragment>
  );
}

export default MobileScreen;
