import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodosForm from './TodosForm';
import todosController from '../../controllers/todosController';
import { getDataFromLocalStorage } from '../../controllers/helpers/common/storage';
import { getTodos, addTodo } from '../actions/todos';
export class Todos extends React.Component {
  state = {
    todos: [],
    project: this.props.selectedProject,
    addTodoMode: false,
  }
  
  componentWillMount(){
    const todos = getDataFromLocalStorage('todosArray');
    this.props.getTodos(todos);
  }

  handleTodoBtn = () => {
    this.setState(() => ({
      addTodoMode: true,
    }));
  }

  handleChange = (key, val) => this.setState({
    [key]: val,
  });

  submitTodo = (todoFromForm) => {
    const newTodo = this.props.addTodo(todoFromForm, this.props.selectedProject.id);
    todosController.create(newTodo.todo);
    this.setState({
      addTodoMode: false,
    })
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
        {this.state.addTodoMode && <TodosForm
        addTodoMode={this.state.addTodoMode}
        handleSubmit={this.submitTodo}
        handleChange={this.handleChange}
        />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  shownTodos: state.todos.filter(todo => todo.projectID === state.selectedProject.id),
  selectedProject: state.selectedProject,
});

export default connect(mapStateToProps, { getTodos, addTodo })(Todos);