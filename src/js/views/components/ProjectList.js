import React from 'react';
import ProjectItem from './ProjectItem';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';

export default (props) => {
  const {
    projects,
    addOrEditProject,
    clickAddProjectBtn,
  } = props;
  return (
    <div>
      <h2>Project List</h2>
      {projects.map(project => (
        <ProjectItem
          key={project.name}
          name={project.name}
        />
      ))}
      <AddProjectBtn
        addOrEditProject={addOrEditProject}
        clickAddProjectBtn={clickAddProjectBtn}
      />
      <ProjectsForm
      addOrEditProject={addOrEditProject}
      />
    </div>
  );
}