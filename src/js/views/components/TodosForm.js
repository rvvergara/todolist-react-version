import React from 'react';

export default (props) => {
  const {
    addOrEditTodo
  } = props;
  console.log(addOrEditTodo);
  const displayClass = addOrEditTodo ? '' : 'd-none';
  return (
    <form
    className={displayClass}
    onSubmit={props.submitTodo}
    >
      <input placeholder="Add something" />
      <button>Add Todo</button>
    </form>
  );
};