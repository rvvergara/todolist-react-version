import {
  addProjectModeSwitch,
  editProjectModeSwitch,
} from '../../../views/actions/forms';

test('addProjectModeSwitch should return the right action', () => {
  expect(addProjectModeSwitch()).toEqual({ type: 'SWITCH_ADD_PROJECT' });
});

test('editProjectModeSwitch should return the right action', () => {
  expect(editProjectModeSwitch()).toEqual({
    type: 'SWITCH_EDIT_PROJECT',
  });
});
