import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import moment from 'moment';
import TodosForm from './TodosForm';
import { updateTodo } from '../actions/todos';
import todosController from '../../controllers/todosController';
export class TodoItem extends React.Component {
  state = {
    todo: this.props.todo,
    done: false,
    editTodoMode: false,
    title: this.props.todo.title,
    description: this.props.todo.description,
    dueDate: this.props.todo.dueDate,
    priority: this.props.todo.priority,
    notes: this.props.todo.notes,
  }

  tickTodo = () => {
    this.setState((prevState) => ({
      done: !prevState.done,
    }));
  }

  clickUpdateBtn = () => {
    this.setState(() => ({
      editTodoMode: true,
    }));
  }

  handleSubmit = (updates) => {
    this.props.updateTodo(this.props.todo.id, updates);
    this.setState(() => {
      const updatedTodo = {...this.state.todo, ...updates}
      todosController.update(updatedTodo);
      return {
        todo: updatedTodo,
        editTodoMode: false,
      }
    });
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
            todo={this.props.todo}
            handleSubmit={this.handleSubmit}
          />
        </td>
      </tr>
      
    )
    return this.state.editTodoMode ? editOutput : regular; 
  }
}

const mapStateToProps = state => ({
  selectedProject: state.selectedProject,
});

export default connect(mapStateToProps, { updateTodo})(TodoItem);