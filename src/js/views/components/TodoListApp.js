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
    this.setState((prevState) => ({
      projects: prevState.projects.concat([project]),
      addProjectMode: false,
    }))
    e.target.reset();
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
        />
        <Todos
        selectedProject={selectedProject}
        />
      </div>
    );
  }
}
