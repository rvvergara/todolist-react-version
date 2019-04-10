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
      <input type="text" placeholder="Note" />
      <button>Add</button>
    </form>
  );
};