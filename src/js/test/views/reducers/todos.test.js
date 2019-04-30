import todosReducer from '../../../views/reducers/todos';
import todos from '../../fixtures/todos';

describe('todos reducer', () => {
  test('should add a valid todo', () => {
    const newTodo = {
      title: 'My todo',
      dueDate: 588647712,
      description: 'Velit laborum occaecat magna exercitation voluptate duis.',
      notes: '',
    };
    const action = {
      type: 'ADD_TODO',
      todo: newTodo,
    };
    const state = todosReducer(todos, action);
    expect(state.length).toBe(todos.length + 1);
  });

  test('should not add a todo without a title', () => {
    const newTodo = {
      title: '',
      dueDate: 57786411,
      description: '',
      notes: '',
    };
    const action = {
      type: 'ADD_TODO',
      todo: newTodo,
    };
    const state = todosReducer(todos, action);
    expect(state.length).toBe(todos.length);
  });

  test('should upate a todo with valid title', () => {
    const todoForUpdate = todos[1];
    const updates = {
      title: 'Cool Todo',
    };
    const action = {
      type: 'UPDATE_TODO',
      id: todoForUpdate.id,
      updates,
    };
    const state = todosReducer(todos, action);
    expect(state[1].title).toBe(updates.title);
  });

  test('should not update a todo without a title', () => {
    const todoForUpdate = todos[0];
    const updates = { title: '' };
    const action = {
      type: 'UPDATE_TODO',
      id: todoForUpdate.id,
      updates,
    };
    const state = todosReducer(todos, action);
    expect(state[0].title).toBe(todoForUpdate.title);
  });

  test('should delete an existing todo', () => {
    const { id } = todos[2];
    const action = {
      type: 'DELETE_TODO',
      id,
    };
    const state = todosReducer(todos, action);
    expect(state.length).toBe(todos.length - 1);
  });
});
