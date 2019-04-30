export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'UPDATE_TODO':
    {
      const todoIndex = state.findIndex(todo => todo.id === action.id);
      const updatedTodo = { ...state[todoIndex], ...action.updates };
      return [...state.slice(0, todoIndex), updatedTodo, ...state.slice(todoIndex + 1)];
    }
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
