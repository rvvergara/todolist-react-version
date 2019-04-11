import React from 'react';

export default (props) => {
  const {
    addOrEditTodo,
  } = props;
  const displayClass = addOrEditTodo ? '' : 'd-none';
  return (
    <form
    className={displayClass}
    onSubmit={props.submitTodo}
    >
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <input type="date"  />
      <select defaultValue="Priority">
        <option value="Priority">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="text" placeholder="Note" />
      <button className="d-none">Add</button>
    </form>
  );
};