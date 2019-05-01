const defaultState = {
  addProjectMode: false,
  editProjectMode: false,
  projectBeingEdited: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_ADD_PROJECT':
      return { ...state, addProjectMode: !state.addProjectMode };
    case 'SWITCH_EDIT_PROJECT':
      return { ...state, editProjectMode: !state.editProjectMode };
    case 'SET_PROJECT_FOR_EDIT':
      return { ...state, projectBeingEdited: action.id };
    default:
      return state;
  }
};
