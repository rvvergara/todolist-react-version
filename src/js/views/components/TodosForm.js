import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class TodosForm extends React.Component {
  state = {
    title: this.props.todo ? this.props.todo.title : '',
    description: this.props.todo ? this.props.todo.description : '',
    dueDate: this.props.todo ? moment(this.props.todo.dueDate) : moment(),
    priority: this.props.todo ? this.props.todo.priority : 'Priority',
    notes: this.props.todo ? this.props.todo.notes : '',
    projectName: this.props.todo ? this.props.todo.projectName : '',
    done: this.props.todo ? this.props.todo.done : false,
    error: '',
    calendarFocused: false,
  };

  handleChange = (key, value) => {
    this.setState(() => ({
      [key]: value,
    }));
  }

  onDateChange = (dueDate) => {if(dueDate) this.setState(() => ({dueDate}))};

  onFocusChange = ({focused}) => this.setState(() => ({ calendarFocused: focused }));

  submitTodo = (e) => {
    const {
      title,
      description,
      dueDate,
      notes,
      priority,
      projectName,
      done,
    } = this.state;
    e.preventDefault();
    if(!title){
      this.setState({
        error: 'Please enter a title'
      });
    }else{
      this.setState({ error: ''});
      this.props.handleSubmit({
        title,
        description,
        dueDate: dueDate.valueOf(),
        notes,
        priority,
        projectName,
        done,
      });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.error && <div>{this.state.error}</div>
        }
        <form
          onSubmit={this.submitTodo}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.handleChange('title', e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={e => this.handleChange('description', e.target.value)}
          />
          <SingleDatePicker 
            date={this.state.dueDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <select
            className="form-control"
            value={this.state.priority}
            onChange={e => this.handleChange('priority', e.target.value)}
          >
            <option value="Priority">Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            className="form-control"
            type="text"
            value={this.state.notes}
            placeholder="Notes"
            onChange={e => this.handleChange('notes', e.target.value)}
          />
          <button
            type="submit"
            className="d-none"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

TodosForm.propTypes = {
  todo: PropTypes.instanceOf(Object),
  handleSubmit: PropTypes.func.isRequired,
}

export default TodosForm;
