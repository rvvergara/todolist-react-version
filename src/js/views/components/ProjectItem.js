import React from 'react';
import { connect } from 'react-redux';
import ProjectItemBtns from './ProjectItemBtns';
import ProjectsForm from './ProjectsForm';
import projectsController from '../../controllers/projectsController';
import { selectProject } from '../actions/selectedProject';
import {
  addProjectModeSwitch,
  editProjectModeSwitch,
  setProjectForEdit,
} from '../actions/forms';
import { deleteProject } from '../actions/projects';
export class ProjectItem extends React.Component {
  state = {
    todos: [],
  }

  handleSelectProject = () => {
    this.props.selectProject(this.props.project.name);
  };

  clickUpdateProjectBtn = (e) => {
    e.stopPropagation();
    this.props.setProjectForEdit(this.props.project.id);
    this.props.editProjectModeSwitch()
    this.setState({ editMode: true});
  }

  submitProjectForm = (e) => {
    e.preventDefault();
    this.props.editProjectMode();
    e.target.reset();
  }

  handleDeleteProject = () => {
    this.props.deleteProject(this.props.project.id);
    projectsController.delete(this.props.project.name);
  };

  render(){
    const {
      dataID,
      project,
    } = this.props;
    const regular = (
      <div onClick={this.handleSelectProject}>
        <span
          className="mx-1"
        >
          { project.name }
        </span>
        <ProjectItemBtns 
          project={project}
          handleDeleteProject={this.handleDeleteProject}
          clickUpdateProjectBtn={this.clickUpdateProjectBtn}
        />
      </div>
    );
    const editMode = (
      <ProjectsForm
      dataID={dataID+1}
      name={name}
      submitProjectForm={this.submitProjectForm}
      />
    )
    if (this.props.editProjectMode && this.props.project.id === this.props.projectBeingEdited){
      return editMode
    }else{
      return regular
    }
  }
};

const mapStateToProps = state => ({
  addProjectMode: state.forms.addProjectMode,
  editProjectMode: state.forms.editProjectMode,
  projectBeingEdited: state.forms.projectBeingEdited,
});

export default connect(mapStateToProps, { addProjectModeSwitch, editProjectModeSwitch, selectProject, setProjectForEdit, deleteProject })(ProjectItem);