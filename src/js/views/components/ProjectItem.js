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
import { deleteProject, updateProject } from '../actions/projects';
export class ProjectItem extends React.Component {
  state = {
    todos: [],
    error: '',
    projectName: this.props.project.name,
  }

  handleSelectProject = () => {
    this.props.selectProject(this.props.project.name);
  };

  clickUpdateProjectBtn = (e) => {
    e.stopPropagation();
    this.props.setProjectForEdit(this.props.project.id);
    this.props.editProjectModeSwitch();
    if(this.props.addProjectMode) this.props.addProjectModeSwitch();
  };


  handleChange = (key, val) => this.setState(() => ({
    [key]: val,
  }));

  submitProjectForm = (e) => {
    e.preventDefault();
    const updates = {
      name: this.state.projectName,
    };
    const id = this.props.project.id;
    this.props.updateProject(id, updates);
    projectsController.update(id, updates);
    this.props.editProjectModeSwitch();
    e.target.reset();
  };

  handleDeleteProject = () => {
    this.props.deleteProject(this.props.project.id);
    projectsController.delete(this.props.project.name);
  };

  render(){
    const {
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
      name={this.state.projectName}
      submitProjectForm={this.submitProjectForm}
      handleChange={this.handleChange}
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

export default connect(mapStateToProps, { addProjectModeSwitch, editProjectModeSwitch, selectProject, setProjectForEdit, deleteProject, updateProject })(ProjectItem);