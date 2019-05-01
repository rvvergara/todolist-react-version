import uuid from 'uuid';

const getTodos = todos => ({
  type: 'GET_TODOS',
  todos,
});

const addTodo = (todo, projectName) => ({
  type: 'ADD_TODO',
  todo: {
    ...todo,
    projectName,
    id: uuid(),
    done: false,
  },
});

const updateTodo = (id, updates) => ({
  type: 'UPDATE_TODO',
  id,
  updates,
});

const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

export {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
