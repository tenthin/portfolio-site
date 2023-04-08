import React from "react";
import "./Project.scss";
import { projects } from "./ProjectData";
import { NavLink } from "react-router-dom";

function Project() {
  const handleOpenLink = (link) => {
    // Open the link in a new window
    window.open(link, "_blank");
  };
  return (
    <div className="my-proj" id="projects">
      <div className="project-title">MY PROJECTS</div>
      <div className="project-display">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="project-body">
              <div className="project-detail">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              ` `{/* <NavLink to={`/fullproject/${project.id}`}> */}
              <button onClick={() => handleOpenLink(project.link)}>
                FULL PROJECT
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
