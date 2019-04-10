import React from 'react';
import ProjectList from './ProjectList';
import Todos from './Todos';

export default class TodoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProject: undefined,
      addOrEditProject: false,
      addOrEditTodo: false,
    };
    this.handleTodoBtn = this.handleTodoBtn.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

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

  handleTodoBtn() {
    this.setState(() => ({
      addOrEditTodo: true
    }));
  }

  submitTodo(e){
    e.preventDefault();
    this.setState(() => ({
      addOrEditTodo: false,
    }));
    e.target.reset();
  }

  render() {
    const {
      projects,
      selectedProject,
      addOrEditTodo,
    } = this.state;
    return (
      <div id="todo-app">
        <ProjectList projects={projects} />
        <Todos
        selectedProject={selectedProject}handleTodoBtn={this.handleTodoBtn} addOrEditTodo={addOrEditTodo}
        submitTodo={this.submitTodo}
        />
      </div>
    );
  }
}
