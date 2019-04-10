import React from 'react';
import ProjectList from './ProjectList';
import Todos from './Todos';

export default class TodoListApp extends React.Component {
  state = {
    projects: [],
    selectedProject: undefined,
    addOrEditProject: false,
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

  render() {
    const {
      projects,
      selectedProject,
    } = this.state;
    return (
      <div id="todo-app">
        <ProjectList projects={projects} />
        <Todos
        selectedProject={selectedProject}
        />
      </div>
    );
  }
}
