import React from 'react';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodosForm from './TodosForm';
import todosController from '../../controllers/todosController';
class Todos extends React.Component {
  state = {
    todos: [],
    project: this.props.selectedProject,
    addTodoMode: false,
  }
  
  componentWillMount(){
    this.setState((prevState, props) => ({
      todos: JSON.parse(localStorage[this.state.project.name]).todos,
    }));
  }

  componentWillReceiveProps(props){
    this.setState(() => ({
      project: props.selectedProject,
    }));
  }

  handleTodoBtn = () => {
    this.setState(() => ({
      addTodoMode: true,
    }));
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.setState(() => ({
      addTodoMode: false,
    }));
    const [title, description, dueDate, priority, note] = e.target.elements;

    const todo = todosController.create(title.value, 
      description.value, 
      dueDate.value, 
      priority.value,  
      note.value, 
      this.state.project.name);
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
    this.props.addTodo(todo);
    e.target.reset();
  }

  render() {
    return (
      <div>
        {this.state.project ? <h2>
          Todo list for&nbsp;
          { this.state.project.name }
        </h2> : <h2>Project Deleted</h2>}
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Note</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.project && this.state.project.todos.map((todo, i) => <TodoItem todo={todo} key={`todo-${i}`} />)
            }
          </tbody>
        </table>
        {
          this.state.project && this.state.project.todos.length === 0 && <div>No todos yet for {this.state.project.name}</div>
        }
        {this.state.project ? <AddTodoBtn
        handleTodoBtn={this.handleTodoBtn}
        addTodoMode={this.state.addTodoMode}
        /> : "No todos for non-existent project"}
        <TodosForm
        addTodoMode={this.state.addTodoMode}
        submitTodo={this.submitTodo}
        />
      </div>
    )
  }
}

export default Todos;