import React from 'react';


const Projects = ({projects}) => (
  <div>
    <p>ProjectS:</p>
    <div className="tile is-ancestor">
      {projects.map((project, i) => (
      <div className="tile is-child" key={i}>
      <a href={project.project.url}>
        {project.project.name}
    </a>
      </div>
      ))}
    </div>


  </div>
  )

export default Projects
