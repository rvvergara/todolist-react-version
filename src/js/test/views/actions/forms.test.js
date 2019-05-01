import {
  addProjectModeSwitch,
  editProjectModeSwitch,
  setProjectForEdit,
} from '../../../views/actions/forms';

test('addProjectModeSwitch should return the right action', () => {
  expect(addProjectModeSwitch()).toEqual({ type: 'SWITCH_ADD_PROJECT' });
});

test('editProjectModeSwitch should return the right action', () => {
  expect(editProjectModeSwitch()).toEqual({
    type: 'SWITCH_EDIT_PROJECT',
  });
});

test('setProjectForEdit should return the right action', () => {
  const id = 'edit-85571166';
  expect(setProjectForEdit(id)).toEqual({
    type: 'SET_PROJECT_FOR_EDIT',
    id,
  });
});
