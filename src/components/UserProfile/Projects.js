import React from 'react';


const Projects = ({projects}) => (
  <div>
    <p>Projects:</p>
    <ul>
      {projects.map((project, i) => (
      <li key={i}>
        {project.http_code}
      </li>
      ))}
    </ul>


  </div>
  )

export default Projects
