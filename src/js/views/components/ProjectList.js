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
    updateProjectForm,
  } = props;
  return (
    <div>
      <h2>Project List</h2>
      {projects.map((project, i) => (
        <ProjectItem
          key={project.name}
          dataID={i}
          name={project.name}
          projects={projects}
          updateProjectForm={updateProjectForm}
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
