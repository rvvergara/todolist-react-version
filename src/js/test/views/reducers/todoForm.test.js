import formsReducer from '../../../views/reducers/todoForm';
import todos from '../../fixtures/todos';

describe('formsReducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
      addTodotMode: false,
      editTodoMode: false,
      todoBeingEdited: undefined,
    };
  });

  test('it should change addTodoMode to true when initially false', () => {
    const action = { type: 'SWITCH_ADD_TODO' };
    expect(formsReducer(defaultState, action).addTodoMode).toBe(true);
  });

  test('it should make addTodoMode false when initially true', () => {
    const action = { type: 'SWITCH_ADD_TODO' };
    defaultState.addTodoMode = true;
    expect(formsReducer(defaultState, action).addTodoMode).toBe(false);
  });

  test('it should change editTodoMode to true when initially false', () => {
    const action = { type: 'SWITCH_EDIT_TODO' };
    expect(formsReducer(defaultState, action).editTodoMode).toBe(true);
  });

  test('it should make editTodoMode false when initially true', () => {
    const action = { type: 'SWITCH_EDIT_TODO' };
    defaultState.editTodoMode = true;
    expect(formsReducer(defaultState, action).editTodoMode).toBe(false);
  });

  test('it should set todo currently being edited', () => {
    const action = {
      type: 'SET_TODO_FOR_EDIT',
      id: todos[1].id,
    };
    expect(formsReducer(defaultState, action).todoBeingEdited).toBe(todos[1].id);
  });
});
