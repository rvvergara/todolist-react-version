import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodosForm from './TodosForm';
import todosController from '../../controllers/todosController';
import { getDataFromLocalStorage } from '../../controllers/helpers/common/storage';
import { getTodos } from '../actions/todos';
export class Todos extends React.Component {
  state = {
    todos: [],
    project: this.props.selectedProject,
    addTodoMode: false,
  }
  
  componentWillMount(){
    const projectName = this.props.selectedProject.name;
    const project = getDataFromLocalStorage(projectName);
    this.props.getTodos(project.todos);
  }

  handleTodoBtn = () => {
    this.setState(() => ({
      addTodoMode: true,
    }));
  }

  handleChange = (key, val) => this.setState({
    [key]: val,
  });

  submitTodo = (e) => {
    e.preventDefault();
    const [title, description, dueDate, priority, note] = e.target.elements;

    const todo = todosController.create(title.value, 
      description.value, 
      dueDate.value, 
      priority.value,  
      note.value, 
      this.state.project.name);
    
    const project = JSON.parse(localStorage[todo.project]);
    
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
      project: project,
      addTodoMode: false,
    }));
    e.target.reset();
  }

  deleteTodo = (e) => {
    console.log("todo deleted")
  }

  render() {
    return (
      <div>
        {this.state.project ? <h2>
          Todo list for&nbsp;
          { this.props.selectedProject.name }
        </h2> : <h2>Project Deleted</h2>}
        <table
          className="table table-striped"
        >
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
              this.props.shownTodos.map((todo, i) => (
                <TodoItem
                todo={todo}
                key={todo.id}
                deleteTodo={this.deleteTodo}
                />
                ))
            }
          </tbody>
        </table>
        {
          this.props.shownTodos.length === 0 && <div>No todos yet for {this.props.selectedProject.name}</div>
        }
        {this.props.selectedProject ? <AddTodoBtn
        handleTodoBtn={this.handleTodoBtn}
        addTodoMode={this.state.addTodoMode}
        /> : "No todos for non-existent project"}
        <TodosForm
        addTodoMode={this.state.addTodoMode}
        submitTodo={this.submitTodo}
        handleChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shownTodos: state.todos.filter(todo => todo.projectID === state.selectedProject.id),
  selectedProject: state.selectedProject,
});

export default connect(mapStateToProps, { getTodos })(Todos);