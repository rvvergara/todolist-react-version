import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';
import {
  addProject,
} from '../actions/projects';
import {
  selectProject
} from '../actions/selectedProject';
import { addProjectModeSwitch, editProjectModeSwitch } from '../actions/projectForm';
import { addTodoModeSwitch, editTodoModeSwitch } from '../actions/todoForm';
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
    if(this.props.addTodoMode) this.props.addTodoModeSwitch();
    if(this.props.editTodoMode) this.props.editTodoModeSwitch();
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
      this.props.selectProject(newProject.project);
      this.props.addNewProject(newProject.project);
    } else {
      this.setState({
        error: 'You have entered a duplicate or invalid name'
      });
    };
  };

  validateName = name => {
    const {projects} = this.props;
    return projects.findIndex(project => project.name === name) === -1; 
  };

  render() {
    return (
      <div>
        {
          !this.props.addProjectMode && 
          
          <AddProjectBtn
            clickAddProjectBtn={this.handleClickAddBtn}
          />
      }
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
  addProjectMode: state.projectForm.addProjectMode,
  addTodoMode: state.todoForm.addTodoMode,
  editProjectMode: state.projectForm.editProjectMode,
  editTodoMode: state.todoForm.editTodoMode,
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  addProject: project => dispatch(addProject(project)),
  addProjectModeSwitch: () => dispatch(addProjectModeSwitch()),
  editProjectModeSwitch: () => dispatch(editProjectModeSwitch()),
  selectProject: project => dispatch(selectProject(project)),
  addTodoModeSwitch: () => dispatch(addTodoModeSwitch()),
  editTodoModeSwitch: () => dispatch(editTodoModeSwitch()),
});

AddNewProject.propTypes = {
  addProjectMode: PropTypes.bool.isRequired,
  addTodoMode: PropTypes.bool.isRequired,
  editProjectMode: PropTypes.bool.isRequired,
  editTodoMode: PropTypes.bool.isRequired,
  projects: PropTypes.instanceOf(Object).isRequired,
  addProject: PropTypes.func.isRequired,
  addNewProject: PropTypes.func.isRequired,
  addProjectModeSwitch: PropTypes.func.isRequired,
  editProjectModeSwitch: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired,
  addTodoModeSwitch: PropTypes.func.isRequired,
  editTodoModeSwitch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProject);