import React from 'react';
import './Projects.css';


const Projects = ({projects}) => (
  <div>
    <p>Projects:</p>
    <ul>
      {projects.map((project, i) => (
      <li className="projectsList" key={i}>
      <a rel="noopener noreferrer" target="_blank" href={project.project.url}>
        {project.project.name}
    </a>
      </li>
      ))}
    </ul>


  </div>
  )

export default Projects
