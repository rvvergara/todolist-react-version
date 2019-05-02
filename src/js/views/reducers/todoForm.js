const defaultState = {
  addTodoMode: false,
  editTodoMode: false,
  todoBeingEdited: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_ADD_TODO':
      return { ...state, addTodoMode: !state.addTodoMode };
    case 'SWITCH_EDIT_TODO':
      return { ...state, editTodoMode: !state.editTodoMode };
    case 'SET_TODO_FOR_EDIT':
      return { ...state, todoBeingEdited: action.id };
    default:
      return state;
  }
};
