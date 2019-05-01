const addProjectModeSwitch = () => ({
  type: 'SWITCH_ADD_PROJECT',
});

const editProjectModeSwitch = () => ({
  type: 'SWITCH_EDIT_PROJECT',
});

const setProjectForEdit = id => ({
  type: 'SET_PROJECT_FOR_EDIT',
  id,
});

export {
  addProjectModeSwitch,
  editProjectModeSwitch,
  setProjectForEdit,
};
