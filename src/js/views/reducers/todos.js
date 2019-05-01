export default (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return [...state, ...action.todos];
    case 'ADD_TODO':
      return action.todo.title ? [...state, action.todo] : state;
    case 'UPDATE_TODO':
    {
      const todoIndex = state.findIndex(todo => todo.id === action.id);
      const updatedTodo = { ...state[todoIndex], ...action.updates };
      return action.updates.title ? [...state.slice(0, todoIndex), updatedTodo, ...state.slice(todoIndex + 1)] : state;
    }
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
