import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodosForm from './TodosForm';
import todosController from '../../controllers/todosController';
import { getDataFromLocalStorage } from '../../controllers/helpers/common/storage';
import { getTodos, addTodo, deleteTodo } from '../actions/todos';
import { addTodoModeSwitch, editTodoModeSwitch } from '../actions/todoForm';
import { addProjectModeSwitch, editProjectModeSwitch } from '../actions/projectForm';
export class Todos extends React.Component {
  
  componentWillMount(){
    const todos = getDataFromLocalStorage('todosArray');
    this.props.getTodos(todos);
  }

  handleTodoBtn = () => {
    this.props.addTodoModeSwitch();
    if(this.props.addProjectMode) this.props.addProjectModeSwitch();
    if(this.props.editProjectMode) this.props.editProjectModeSwitch();
  }

  submitTodo = (todoFromForm) => {
    const newTodo = this.props.addTodo(todoFromForm, this.props.selectedProject.id);
    todosController.create(newTodo.todo);
    this.props.addTodoModeSwitch();
  }

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
    if(this.props.addTodoMode) this.props.addTodoModeSwitch();
    if(this.props.editTodoMode) this.props.editTodoModeSwitch();
    if(this.props.addProjectMode) this.props.addProjectModeSwitch();
    if(this.props.editProjectMode) this.props.editProjectModeSwitch();
  }

  render() {
    return (
      <div>
        {this.props.selectedProject ? <h2>
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
        { (this.props.selectedProject && !this.props.addTodoMode && !this.props.editTodoMode) && 
          <AddTodoBtn
            handleTodoBtn={this.handleTodoBtn}
            addTodoMode={this.props.addTodoMode}
            editTodoMode={this.props.editTodoMode}
          />
        }

        {this.props.addTodoMode && 
          <TodosForm
            addTodoMode={this.props.addTodoMode}
            handleSubmit={this.submitTodo}
          />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  shownTodos: state.todos.filter(todo => todo.projectID === state.selectedProject.id),
  selectedProject: state.selectedProject,
  addTodoMode: state.todoForm.addTodoMode,
  editTodoMode: state.todoForm.editTodoMode,
  addProjectMode: state.projectForm.addProjectMode,
  editProjectMode: state.projectForm.editProjectMode,
});

const mapDispatchToProps = dispatch => ({
  addProjectModeSwitch: () => dispatch(addProjectModeSwitch()),
  addTodo: (todo, projectID) => dispatch(addTodo(todo, projectID)),
  addTodoModeSwitch: () => dispatch(addTodoModeSwitch()),
  deleteTodo: id => dispatch(deleteTodo(id)),
  editProjectModeSwitch: () => dispatch(addProjectModeSwitch()),
  editTodoModeSwitch: () => dispatch(editTodoModeSwitch()),
  getTodos: todos => dispatch(getTodos(todos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);