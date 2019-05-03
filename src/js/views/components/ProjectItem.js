import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectItemBtns from './ProjectItemBtns';
import ProjectsForm from './ProjectsForm';
import projectsController from '../../controllers/projectsController';
import { selectProject } from '../actions/selectedProject';
import {
  addProjectModeSwitch,
  editProjectModeSwitch,
  setProjectForEdit,
} from '../actions/projectForm';
import {
  addTodoModeSwitch,
  editTodoModeSwitch,
} from '../actions/todoForm';
import { deleteProject, updateProject } from '../actions/projects';
import { deleteTodo } from '../actions/todos';
export class ProjectItem extends React.Component {
  state = {
    todos: [],
    error: '',
    projectName: this.props.project.name,
  }

  handleSelectProject = () => {
    this.props.selectProject(this.props.project);
  };

  clickUpdateProjectBtn = (e) => {
    e.stopPropagation();
    if(!this.props.editProjectMode) 
    this.props.editProjectModeSwitch();
    this.props.setProjectForEdit(this.props.project.id);
    if(this.props.addProjectMode) this.props.addProjectModeSwitch();
    if(this.props.addTodoMode) this.props.addTodoModeSwitch();
    if(this.props.editTodoMode) this.props.editTodoModeSwitch();
  };


  handleChange = (key, val) => this.setState(() => ({
    [key]: val,
  }));

  submitProjectForm = (e) => {
    e.preventDefault();
    const updates = {
      name: this.state.projectName,
    };
    const isValid = this.validateName(updates.name);
    if(updates.name && isValid){const id = this.props.project.id;
    this.props.updateProject(id, updates);
    projectsController.update(id, updates);
    this.props.editProjectModeSwitch();
    this.props.selectProject({...this.props.project, name: updates.name});
    this.setState({
      error: '',
    })}else{
      this.setState({
        error: 'You have entered a duplicate or invalid name'
      });
    }
    e.target.reset();
  };

  validateName = name => {
    const {projects} = this.props;
    return projects.findIndex(project => project.name === name) === -1; 
  };

  handleDeleteProject = () => {
    this.props.deleteProject(this.props.project.id);
    projectsController.delete(this.props.project.id);
    this.props.deleteAllTodos(this.props.projectTodos);
    this.props.handleDeleteProject(this.props.project.id);
    this.switchModesOffOnDelete();
  };

  switchModesOffOnDelete = () => {
    if(this.props.addProjectMode) this.props.addProjectModeSwitch();
    if(this.props.editProjectMode) this.props.editProjectModeSwitch();
    if(this.props.addTodoMode) this.props.addTodoModeSwitch();
    if(this.props.editTodoMode) this.props.editTodoModeSwitch();    
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
      error={this.state.error}
      />
    )
    if (this.props.editProjectMode && this.props.project.id === this.props.projectBeingEdited){
      return editMode
    }else{
      return regular
    }
  }
};

const mapStateToProps = (state, props) => ({
  addProjectMode: state.projectForm.addProjectMode,
  addTodoMode: state.todoForm.addTodoMode,
  editProjectMode: state.projectForm.editProjectMode,
  editTodoMode: state.todoForm.editTodoMode,
  projects: state.projects,
  projectBeingEdited: state.projectForm.projectBeingEdited,
  projectTodos: state.todos.filter(todo => todo.projectID === props.project.id),
});

const mapDispatchToProps = (dispatch) => ({
  addProjectModeSwitch: () => dispatch(addProjectModeSwitch()),
  addTodoModeSwitch: () => dispatch(addTodoModeSwitch()),
  deleteProject: id => dispatch(deleteProject(id)),
  deleteAllTodos: (todos) => {
    todos.forEach(todo => dispatch(deleteTodo(todo.id)));
  },
  editTodoModeSwitch: () => dispatch(editTodoModeSwitch()),
  editProjectModeSwitch: () => dispatch(editProjectModeSwitch()),
  selectProject: project => dispatch(selectProject(project)),
  setProjectForEdit: id => dispatch(setProjectForEdit(id)),
  updateProject: (id, updates) => dispatch(updateProject(id, updates)),
});

ProjectItem.propTypes = {
  addProjectMode: PropTypes.bool.isRequired,
  addTodoMode: PropTypes.bool.isRequired,
  editProjectMode: PropTypes.bool.isRequired,
  editTodoMode: PropTypes.bool.isRequired,
  projects: PropTypes.instanceOf(Object).isRequired,
  projectBeingEdited: PropTypes.string,
  projectTodos: PropTypes.instanceOf(Object).isRequired,
  addProjectModeSwitch: PropTypes.func.isRequired,
  addTodoModeSwitch: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  deleteAllTodos: PropTypes.func.isRequired,
  editTodoModeSwitch: PropTypes.func.isRequired,
  editProjectModeSwitch: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired,
  setProjectForEdit: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);