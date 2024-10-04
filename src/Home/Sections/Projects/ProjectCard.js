import React from "react";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Github } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { ReactComponent as Android } from "../../../Files/svg/android.svg";
import { ReactComponent as Python } from "../../../Files/svg/python.svg";
import { ReactComponent as CPP } from "../../../Files/svg/cpp.svg";
import { ReactComponent as JAVA } from "../../../Files/svg/java.svg";
import { ReactComponent as JS } from "../../../Files/svg/JS.svg";
import { ReactComponent as PGSql } from "../../../Files/svg/postgresql.svg";
import { ReactComponent as Django } from "../../../Files/svg/django.svg";
import { ReactComponent as Pytorch } from "../../../Files/svg/pytorch.svg";
import { ReactComponent as Bash } from "../../../Files/svg/bash.svg";

import "./style.css";

function ProjectCard(props) {
  const imgHeight = props.width.slice(0, -3) * 0.5625 + "rem";
  return (
    <div class="card shadow rounded" style={{ width: props.width, margin: "30px" }}>
      <img
        src={require(`../../../Files/imgs/${props.project.imgName}`)}
        class="card-img-top"
        alt={props.project.name}
        style={{ height: imgHeight }}
      ></img>
      <div class="card-body">
        <h3 class="card-title">{props.project.name}</h3>
        <div class="d-flex flex-row">
          {props.project.tech["cpp"] ? (
            <CPP style={{ paddingLeft: "4", marginRight: "8", width: "28px", height: "28px" }} />
          ) : null}
          {props.project.tech["java"] ? (
            <JAVA style={{ paddingLeft: "0", marginRight: "2", width: "35px", height: "35px" }} />
          ) : null}
          {props.project.tech["js"] ? (
            <JS style={{ paddingLeft: "4", marginRight: "8", width: "29px", height: "29px" }} />
          ) : null}
          {props.project.tech["python"] ? (
            <Python style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />
          ) : null}
          {props.project.tech["opengl"] ? (
            <img
              src={require("../../../Files/imgs/opengl.png")}
              style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              alt="opengl"
            ></img>
          ) : null}
          {props.project.tech["javafx"] ? (
            <img
              src={require("../../../Files/imgs/javafx.jpg")}
              style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              alt="javafx"
            ></img>
          ) : null}
          {props.project.tech["django"] ? (
            <Django style={{ paddingLeft: "4", marginRight: "7", width: "37px", height: "37px", paddingTop: "0px" }} />
          ) : null}
          {props.project.tech["pytorch"] ? (
            <Pytorch style={{ padding: "0", marginRight: "4", width: "27px", height: "27px" }} />
          ) : null}
          {props.project.tech["bash"] ? (
            <Bash
              style={{
                padding: "0",
                margin: "0",
                marginRight: "6",
                width: "30px",
                height: "30px",
              }}
            />
          ) : null}
          {props.project.tech["react"] ? (
            <FontAwesomeIcon style={{ paddingRight: "4", color: "#00d8ff" }} size="2x" icon="fa-brands fa-react" />
          ) : null}
          {props.project.tech["android"] ? (
            <Android style={{ paddingLeft: "1", marginRight: "4", width: "32px", height: "32px" }} />
          ) : null}
          {props.project.tech["node"] ? (
            <FontAwesomeIcon
              style={{ paddingLeft: "4", paddingRight: "4", color: "#73B856" }}
              size="2x"
              icon="fa-brands fa-node"
            />
          ) : null}
          {props.project.tech["pgsql"] ? (
            <PGSql style={{ paddingLeft: "4px", paddingRight: "4px", width: "35px" }} />
          ) : null}
          {props.project.tech["bootstrap"] ? (
            <FontAwesomeIcon
              style={{ paddingLeft: "4", paddingRight: "8", color: "#7411EF", width: "30px", height: "30px" }}
              size="2x"
              icon="fa-brands fa-bootstrap"
            />
          ) : null}
        </div>
        <p class="card-text" style={{ fontSize: "13px", paddingTop: "5px" }}>
          {props.project.description}
        </p>

        <div class="d-flex flex-row-reverse">
          {props.project.videolink && props.project.videolink.trim() !== "" && (
            <Link target="_blank" rel="noopener noreferrer" href={props.project.videolink} underline="none" color="red">
              <Youtube size={25} class="m-1" />
            </Link>
          )}
          <Link target="_blank" rel="noopener noreferrer" href={props.project.gitlink} underline="none" color="black">
            <Github size={25} class="m-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
