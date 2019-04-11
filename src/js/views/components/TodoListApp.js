import React from 'react';
import ProjectList from './ProjectList';
import Todos from './Todos';
import projectsController from '../../controllers/projectsController';

export default class TodoListApp extends React.Component {
  state = {
    projects: [],
    selectedProject: undefined,
    addProjectMode: false,
  };

  componentWillMount() {
    const json = localStorage.projectsArray;
    if (json) {
      const projectsArray = JSON.parse(json);
      this.setState(() => ({
        projects: projectsArray,
        selectedProject: projectsArray[0]
      }));
    }
  }

  clickAddProjectBtn = () => {
    this.setState(() => ({
      addProjectMode: true,
    }))
  }

  submitProjectForm = (e) => {
    e.preventDefault();
    const project = projectsController.create(e.target.elements[0].value);
    this.setState(() => ({
      projects: JSON.parse(localStorage.projectsArray),
      addProjectMode: false,
    }))
    e.target.reset();
  }

  updateProjectForm = (id) => {
    projectsController.update(id);
    this.setState(() => ({
      projects: JSON.parse(localStorage.projectsArray)
    }));
  }

  deleteProject = (e) => {
    const projectForDeletion = e.target.parentNode.childNodes[0].innerText;
    projectsController.delete(projectForDeletion);
    this.setState(() => ({
      projects: JSON.parse(localStorage.projectsArray) 
    }));
  }

  render() {
    const {
      projects,
      selectedProject,
      addProjectMode,
    } = this.state;
    return (
      <div id="todo-app">
        <ProjectList
        projects={projects}
        addProjectMode={addProjectMode}
        clickAddProjectBtn={this.clickAddProjectBtn}
        submitProjectForm={this.submitProjectForm}
        updateProjectForm={this.updateProjectForm}
        deleteProject={this.deleteProject}
        />
        <Todos
        selectedProject={selectedProject}
        />
      </div>
    );
  }
}
