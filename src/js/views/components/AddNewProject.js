import React from 'react';
import { connect } from 'react-redux';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';
import {
  addProject,
} from '../actions/projects';
import projectsController from '../../controllers/projectsController';

export class AddNewProject extends React.Component {
  state = {
    addProjectMode: false,
    error: '',
    projectName: '',
  };

  handleClickAddBtn = () => {
    this.setState({
      addProjectMode: true,
    });
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
        addProjectMode: false,
        projectName: '',
        error: '',
      });
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
        <AddProjectBtn
          addProjectMode={this.state.addProjectMode}
          clickAddProjectBtn={this.handleClickAddBtn}
        />
        <ProjectsForm
          addProjectMode={this.state.addProjectMode}
          submitProjectForm={this.handleSubmitProjectForm}
          handleChange={this.handleChange}
          error={this.state.error}
          name={this.state.projectName}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { addProject})(AddNewProject);