import React from 'react';


const Projects = ({projects}) => (
  <div>
    <p>ProjectS:</p>
    <ul>
      {projects.map((project, i) => (
      <li key={i}>
        {project.description}
      </li>
      ))}
    </ul>


  </div>
  )

export default Projects
