import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';

export class ProjectList extends React.Component {

};

const mapStateToProps = state => ({
  projects: state.projects,
});

const ProjectList = (props) => {
  const {
    projects,
    addProjectMode,
    clickAddProjectBtn,
    submitProjectForm,
    updateProjectForm,
    deleteProject,
    selectProject,
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
          deleteProject={deleteProject}
          selectProject={selectProject}
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

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(Object).isRequired,
  addProjectMode: PropTypes.bool.isRequired,
  clickAddProjectBtn: PropTypes.func.isRequired,
  submitProjectForm: PropTypes.func.isRequired,
  updateProjectForm: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired,
};

export default ProjectList;
