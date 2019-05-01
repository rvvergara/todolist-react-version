import React from 'react';
import { connect } from 'react-redux';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';
import {
  addProject,
} from '../actions/projects';
import { addProjectModeSwitch, editProjectModeSwitch } from '../actions/projectForm';
import projectsController from '../../controllers/projectsController';

export class AddNewProject extends React.Component {
  state = {
    addProjectMode: false,
    error: '',
    projectName: '',
  };

  handleClickAddBtn = () => {
    this.props.addProjectModeSwitch();
    if(this.props.editProjectMode) this.props.editProjectModeSwitch();
  };

  handleChange = (key, val) => this.setState({
    [key]: val,
  });

  handleSubmitProjectForm = (e) => {
    e.preventDefault();
    const { addProject } = this.props;
    const name = this.state.projectName;
    const isValid = this.validateName(name);
    if(isValid && name){
      this.setState({
        projectName: '',
        error: '',
      });
      this.props.addProjectModeSwitch();
      const newProject = addProject({name});
      projectsController.create(name, newProject.project.id);
    } else {
      this.setState({
        error: 'You have entered a duplicate or invalid name'
      });
    }
  };

  validateName = name => {
    const {projects} = this.props;
    return projects.findIndex(project => project.name === name) === -1; 
  };

  render() {
    return (
      <div>
        {!this.props.addProjectMode && <AddProjectBtn
          addProjectMode={this.state.addProjectMode}
          clickAddProjectBtn={this.handleClickAddBtn}
        />}
        { this.props.addProjectMode && <ProjectsForm
          addProjectMode={this.state.addProjectMode}
          submitProjectForm={this.handleSubmitProjectForm}
          handleChange={this.handleChange}
          error={this.state.error}
          name={this.state.projectName}
        />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  addProjectMode: state.projectForm.addProjectMode,
  editProjectMode: state.projectForm.editProjectMode,
});

export default connect(mapStateToProps, { addProject, addProjectModeSwitch, editProjectModeSwitch})(AddNewProject);