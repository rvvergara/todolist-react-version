import React from 'react';
import ProjectItem from './ProjectItem';

export default (props) => {
  const {
    projects
  } = props;

  return (
    <div>
      <h2>Project List</h2>
      {projects.map(project => <ProjectItem key={project.name} name={project.name} />)}
    </div>
  );
}