import React from 'react';
import ProjectItem from './ProjectItem';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';

export default (props) => {
  const {
    projects,
    addProjectMode,
    editProjectMode,
    clickAddProjectBtn,
    submitProjectForm,
    clickUpdateProjectBtn,
  } = props;
  return (
    <div>
      <h2>Project List</h2>
      {projects.map(project => (
        <ProjectItem
          key={project.name}
          name={project.name}
          editProjectMode={editProjectMode}
          clickUpdateProjectBtn={clickUpdateProjectBtn}
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
