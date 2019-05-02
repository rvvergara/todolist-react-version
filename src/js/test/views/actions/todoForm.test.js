import {
  addTodoModeSwitch,
  editTodoModeSwitch,
  setTodoForEdit,
} from '../../../views/actions/todoForm';

test('addTodotModeSwitch should return the right action', () => {
  expect(addTodoModeSwitch()).toEqual({ type: 'SWITCH_ADD_TODO' });
});

test('editTodotModeSwitch should return the right action', () => {
  expect(editTodoModeSwitch()).toEqual({
    type: 'SWITCH_EDIT_TODO',
  });
});

test('setTodoForEdit should return the right action', () => {
  const id = 'edit-85571166';
  expect(setTodoForEdit(id)).toEqual({
    type: 'SET_TODO_FOR_EDIT',
    id,
  });
});
