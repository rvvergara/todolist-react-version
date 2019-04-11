import React from 'react';
import ProjectItem from './ProjectItem';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';

export default (props) => {
  const {
    projects,
    addProjectMode,
    clickAddProjectBtn,
    submitProjectForm,
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
        addProjectMode={addProjectMode}
        clickAddProjectBtn={clickAddProjectBtn}
      />
      <ProjectsForm
        addProjectMode={addProjectMode}
        submitProjectForm={submitProjectForm}
      />
    </div>
  );
};
