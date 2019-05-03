import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import moment from 'moment';
import TodosForm from './TodosForm';
import { updateTodo } from '../actions/todos';
import { addTodoModeSwitch ,editTodoModeSwitch, setTodoForEdit } from '../actions/todoForm';
import { addProjectModeSwitch, editProjectModeSwitch } from '../actions/projectForm';
import todosController from '../../controllers/todosController';
export class TodoItem extends React.Component {
  state = {
    todo: this.props.todo,
    done: this.props.todo.done,
    title: this.props.todo.title,
    description: this.props.todo.description,
    dueDate: this.props.todo.dueDate,
    priority: this.props.todo.priority,
    notes: this.props.todo.notes,
  }

  tickTodo = () => {
    this.setState((prevState) => {
      const newDone = !prevState.done;
      todosController.update(this.props.todo.id, { done: newDone });
      this.props.updateTodo(this.props.todo.id, {...prevState.todo, done: newDone});
      return {
        todo: {...prevState.todo, done: newDone},
        done: newDone,
      }
    })
  }

  clickUpdateBtn = (e) => {
    e.stopPropagation();
    if(!this.props.editTodoMode) this.props.editTodoModeSwitch();
    this.props.setTodoForEdit(this.props.todo.id);
    if(this.props.addTodoMode) this.props.addTodoModeSwitch();
    if(this.props.addProjectMode) this.props.addProjectModeSwitch();
    if(this.props.editProjectMode) this.props.editProjectModeSwitch();
    this.props.setTodoForEdit(this.props.todo.id);
  }

  handleSubmit = (updates) => {
    const { updateTodo, todo, editTodoModeSwitch } = this.props;
    updateTodo(todo.id, updates);
    this.setState(() => {
      const updatedTodo = {...this.state.todo, ...updates}
      todosController.update(todo.id, updates);
      return {
        todo: updatedTodo,
      }
    });
    editTodoModeSwitch();
  };

  handleDelete = (e) => {
    e.stopPropagation();
    this.props.deleteTodo(this.props.todo.id);
    todosController.delete(this.props.todo.id, this.props.selectedProject);
  }

  render() {
    const {
      todo
    } = this.props;
    const {
      title,
      description,
      dueDate,
      priority,
      notes,
      done,
    } = todo;
    const doneClass = done ? 'strikeout' : '';
    const regular = (
      <tr
        className={doneClass}
        id={todo.id}
      >
        <td>{title}</td>
        <td>{description}</td>
        <td>{moment(dueDate).format('dddd MMM D, YYYY')}</td>
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
            className="btn btn-sm btn-warning"
            disabled={this.state.done}
            onClick={this.clickUpdateBtn}
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-danger"
            disabled={this.state.done}
            onClick={this.handleDelete}
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
            todo={this.props.todo}
            handleSubmit={this.handleSubmit}
          />
        </td>
      </tr>
      
    )
    return (this.props.editTodoMode && this.props.todo.id === this.props.todoBeingEdited ) ? editOutput : regular; 
  }
}

const mapStateToProps = state => ({
  selectedProject: state.selectedProject,
  addTodoMode: state.todoForm.addTodoMode,
  editTodoMode: state.todoForm.editTodoMode,
  todoBeingEdited: state.todoForm.todoBeingEdited,
  addProjectMode: state.projectForm.addProjectMode,
  editProjectMode: state.projectForm.editProjectMode,
});

const mapDispatchToProps = dispatch => ({
  addProjectModeSwitch: () => dispatch(addProjectModeSwitch()),
  addTodoModeSwitch: () => dispatch(addTodoModeSwitch()),
  editProjectModeSwitch: () => dispatch(editProjectModeSwitch()),
  editTodoModeSwitch: () => dispatch(editTodoModeSwitch()),
  setTodoForEdit: id => dispatch(setTodoForEdit(id)),
  updateTodo: (id, updates) => dispatch(updateTodo(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);