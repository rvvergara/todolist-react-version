const addTodoModeSwitch = () => ({
  type: 'SWITCH_ADD_TODO',
});

const editTodoModeSwitch = () => ({
  type: 'SWITCH_EDIT_TODO',
});

const setTodoForEdit = id => ({
  type: 'SET_TODO_FOR_EDIT',
  id,
});

export {
  addTodoModeSwitch,
  editTodoModeSwitch,
  setTodoForEdit,
};
