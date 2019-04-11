import React from 'react';

export default (props) => {
  const {
    addTodoMode,
    editTodoMode,
    title,
    description,
    dueDate,
    priority,
    notes,
  } = props;
  const displayClass = addTodoMode || editTodoMode ? 'todo-form' : 'd-none todo-form';
  return (
    <form
    className={displayClass}
    onSubmit={props.submitTodo}
    >
      <input
      type="text"
      placeholder="Title"
      defaultValue={title}
      />
      <input
      type="text"
      placeholder="Description"
      defaultValue={description}
      />
      <input
      type="date"
      defaultValue={dueDate}
      />
      <select defaultValue={priority}>
        <option value="Priority">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
      type="text"
      defaultValue={notes}
      placeholder="Notes"
      />
      <button className="d-none">Add</button>
    </form>
  );
};