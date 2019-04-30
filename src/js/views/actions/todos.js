import uuid from 'uuid';

const addTodo = (todo, projectName) => ({
  type: 'ADD_TODO',
  todo: {
    ...todo,
    projectName,
    id: uuid(),
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
  addTodo,
  updateTodo,
  deleteTodo,
};
