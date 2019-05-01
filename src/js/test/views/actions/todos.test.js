import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../../../views/actions/todos';
import projects from '../../fixtures/projects';
import todos from '../../fixtures/todos';

test('getTodos should return a valid action', () => {
  expect(getTodos(todos)).toEqual({
    type: 'GET_TODOS',
    todos,
  });
});

test('addTodo should return a valid action', () => {
  const newTodo = {
    title: 'Culpa excepteur ex incididunt velit ipsum.',
    description: 'Cillum et veniam sint amet non duis fugiat deserunt aute laborum adipisicing eiusmod ex quis.',
    dueDate: 7566177,
    notes: '',
  };
  const action = addTodo(newTodo, projects[0].name);
  expect(action.type).toBe('ADD_TODO');
  expect(action.todo.title).toBe(newTodo.title);
  expect(action.todo.description).toBe(newTodo.description);
});

test('updateTodo should return a valid action', () => {
  const updates = { title: 'A nice todo' };
  const action = updateTodo(2, updates);
  expect(action.type).toBe('UPDATE_TODO');
  expect(action.id).toBe(2);
  expect(action.updates.title).toBe(updates.title);
});

test('deleteTodo should return a valid action', () => {
  const action = deleteTodo(3);
  expect(action.type).toBe('DELETE_TODO');
  expect(action.id).toBe(3);
});
