import React from 'react';

const ProjectSummary = ({ project }) => {
  return(
    <div className="card z-depth-0 project-smmary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project title</span>
        <p>Posted by the mariodev</p>
        <p className="grey-text">Aphril 23 of 2019, 11:30 am</p>
      </div>
    </div>
  );
}

export default ProjectSummary;