import React from 'react';
import { connect } from 'react-redux';
import ProjectsForm from './ProjectsForm';
import { selectProject } from '../actions/selectedProject';
import {
  addProjectModeSwitch,
  editProjectModeSwitch,
} from '../actions/forms';
export class ProjectItem extends React.Component {
  state = {
    todos: [],
  }

  handleSelectProject = () => {
    this.props.selectProject(this.props.project.name);
  };

  clickUpdateProjectBtn = (e) => {
    e.stopPropagation();
    this.props.editProjectModeSwitch()
    this.setState({ editMode: true});
  }

  submitProjectForm = (e) => {
    e.preventDefault();
    this.props.editProjectMode();
    e.target.reset();
  }

  render(){
    const {
      dataID,
      deleteProject,
      project,
    } = this.props;
    const regular = (
      <div onClick={this.handleSelectProject}>
        <span
          className="mx-1"
        >
          { project.name }
        </span>
        <button
          className="btn btn-sm btn-danger"
          id={`delete-${project.id}`}
          onClick={deleteProject}
        >
          Delete
        </button>
        <button
          id={`update-${project.id}`}
          className="btn btn-sm btn-warning"
          onClick={this.clickUpdateProjectBtn}
        >
        Update
        </button>
      </div>
    );
    const editMode = (
      <ProjectsForm
      dataID={dataID+1}
      name={name}
      submitProjectForm={this.submitProjectForm}
      />
    )
    if (this.props.editProjectMode){
      return editMode
    }else{
      return regular
    }
  }
};

const mapStateToProps = state => ({
  addProjectMode: state.forms.addProjectMode,
  editProjectMode: state.forms.editProjectMode,
});

export default connect(mapStateToProps, { addProjectModeSwitch, editProjectModeSwitch, selectProject})(ProjectItem);