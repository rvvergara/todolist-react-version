const defaultState = {
  addProjectMode: false,
  editProjectMode: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_ADD_PROJECT':
      return { ...state, addProjectMode: !state.addProjectMode };
    case 'SWITCH_EDIT_PROJECT':
      return { ...state, editProjectMode: !state.editProjectMode };
    default:
      return state;
  }
};
