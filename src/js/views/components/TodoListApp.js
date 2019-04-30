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
      selectedProject: project,
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

  selectProject = (e) => {
    const selectedProjectName = e.target.innerText;
    this.setState(() => ({
      selectedProject: JSON.parse(localStorage.projectsArray).find(x => x.name === selectedProjectName),
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
        <ProjectList />
        <Todos
        selectedProject={selectedProject}
        />
      </div>
    );
  }
}
