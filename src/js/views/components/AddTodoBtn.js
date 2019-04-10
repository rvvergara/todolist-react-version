import React from 'react';

export default (props) => {
  const {
    handleTodoBtn,
    addOrEditTodo,
  } = props;
  const displayClass = !addOrEditTodo ? '' : 'd-none';
  return (
    <button
    type='button'
    className={displayClass}
    onClick={handleTodoBtn}
    >
    Add Todo
    </button>
)
}