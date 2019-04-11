import React from 'react';
import TodosForm from './TodosForm';
import todosController from '../../controllers/todosController';
class TodoItem extends React.Component {
  state = {
    todo: {...this.props.todo},
    done: false,
    editTodoMode: false,
    title: this.props.todo.title,
    description: this.props.todo.description,
    dueDate: this.props.todo.dueDate,
    priority: this.props.todo.priority,
    notes: this.props.todo.notes,
  }

  componentWillMount(){
    const todo = this.state.todo;
    this.setState(() => ({
      done: todo.done,
    }))
  }

  tickTodo = () => {
    this.setState((prevState) => ({
      done: !prevState.done,
    }));
    this.setState((prevState)=> {
      const newTodo = Object.assign({}, prevState.todo, {done: prevState.done});
      const project = JSON.parse(localStorage[newTodo.project]);
      const projectsArr = JSON.parse(localStorage.projectsArray);
      const newTodoIndex = project.todos.findIndex(x => x.id === newTodo.id);
      const projectIndex = projectsArr.findIndex(x => x.name === project.name);
      project.todos[newTodoIndex] = newTodo;
      projectsArr[projectIndex] = project;
      localStorage.setItem(project.name, JSON.stringify(project));
      localStorage.setItem("projectsArray", JSON.stringify(projectsArr));
      return {
        todo: newTodo,
      }
    })
  }

  clickUpdateBtn = () => {
    this.setState(() => ({
      editTodoMode: true,
    }));
  }

  updateTodo = (e) => {
    e.preventDefault();
    const project = JSON.parse(localStorage[this.state.todo.project]);
    const todoID = this.state.todo.id;
    const projectName = project.name;
    todosController.update(project, todoID, projectName);
    const todo = project.todos.find(x => x.id === todoID);
    const todoIndex = project.todos.findIndex(x => x.id === todoID);
    this.setState(()=>({
      editTodoMode: false,
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      priority: todo.priority,
      notes: todo.notes,
    }));
    const updatedProject = Object.assign({}, project);
    updatedProject.todos[todoIndex] = todo;
    localStorage.setItem(updatedProject.name, JSON.stringify(updatedProject));
    const projectsArr = JSON.parse(localStorage.projectsArray);
    const projectIndex = projectsArr.findIndex(x => x.name === updatedProject.name);
    projectsArr[projectIndex] = updatedProject;
    localStorage.setItem("projectsArray", JSON.stringify(projectsArr));
  }

  render() {
    const {
      title,
      description,
      dueDate,
      priority,
      notes,
      done,
      todo,
    } = this.state;
    const doneClass = done ? 'strikeout' : '';
    const regular = (
      <tr
        className={doneClass}
        id={todo.id}
      >
        <td>{title}</td>
        <td>{description}</td>
        <td>{dueDate}</td>
        <td>{priority}</td>
        <td>{notes}</td>
        <td>
          <input
          type="checkbox"
          defaultValue={this.state.done}
          checked={this.state.done}
          onChange={this.tickTodo}
          />
        </td>
        <td>
          <button
            onClick={this.clickUpdateBtn}
          >
            Update
          </button>
          <button
            onClick={this.props.deleteTodo}
          >
            Delete
          </button>
        </td>
      </tr>
    );
    const editOutput = (
      <tr>
        <td colSpan="6">
          <TodosForm
          editTodoMode={this.state.editTodoMode}
          title={title}
          description={description}
          dueDate={dueDate}
          priority={priority}
          notes={notes}
          submitTodo={this.updateTodo}
          />
        </td>
      </tr>
      
    )
    return this.state.editTodoMode ? editOutput : regular; 
  }
}

export default TodoItem;