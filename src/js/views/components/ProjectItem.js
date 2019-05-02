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
} from '../actions/projectForm';
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
    this.props.selectProject({...this.props.project, name: updates.name});
    e.target.reset();
  };

  handleDeleteProject = () => {
    this.props.deleteProject(this.props.project.id);
    this.props.projectTodos.forEach(todo => this.props.deleteTodo(todo.id));
    projectsController.delete(this.props.project.id);
    this.props.handleDeleteProject(this.props.project.id);
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

const mapStateToProps = (state, props) => ({
  projectTodos: state.todos.filter(todo => todo.projectID === props.project.id),
  addProjectMode: state.projectForm.addProjectMode,
  editProjectMode: state.projectForm.editProjectMode,
  projectBeingEdited: state.projectForm.projectBeingEdited,
});

export default connect(mapStateToProps, { addProjectModeSwitch, editProjectModeSwitch, selectProject, setProjectForEdit, deleteProject, updateProject, deleteTodo })(ProjectItem);