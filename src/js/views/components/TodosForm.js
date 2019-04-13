import React from 'react';
import PropTypes from 'prop-types';

const TodosForm = (props) => {
  const {
    addTodoMode,
    editTodoMode,
    title,
    description,
    dueDate,
    priority,
    notes,
    handleChange,
    submitTodo,
  } = props;
  const displayClass = addTodoMode || editTodoMode ? 'todo-form form-inline' : 'd-none todo-form';
  return (
    <form
      className={displayClass}
      onSubmit={submitTodo}
    >
      <input
        className="form-control"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => handleChange('title', e.target.value)}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => handleChange('description', e.target.value)}
      />
      <input
        className="form-control"
        type="date"
        value={dueDate}
        onChange={e => handleChange('dueDate', e.target.value)}
      />
      <select
        className="form-control"
        value={priority}
        onChange={e => handleChange('priority', e.target.value)}
      >
        <option value="Priority">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        className="form-control"
        type="text"
        value={notes}
        placeholder="Notes"
        onChange={e => handleChange('notes', e.target.value)}
      />
      <button
        type="submit"
        className="d-none"
      >
        Add
      </button>
    </form>
  );
};

TodosForm.propTypes = {
  addTodoMode: PropTypes.bool,
  editTodoMode: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  dueDate: PropTypes.string,
  priority: PropTypes.string,
  notes: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  submitTodo: PropTypes.func.isRequired,
};

TodosForm.defaultProps = {
  title: undefined,
  description: undefined,
  dueDate: undefined,
  priority: undefined,
  notes: undefined,
  addTodoMode: false,
  editTodoMode: false,
};

export default TodosForm;
