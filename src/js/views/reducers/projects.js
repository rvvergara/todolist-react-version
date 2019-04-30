export default (state = [], action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return [...state, action.projects];
    case 'ADD_PROJECT':
      return state.concat(action.project);
    case 'UPDATE_PROJECT':
    {
      const projectIndex = state.findIndex(project => project.id === action.id);
      const updatedProject = { ...state[projectIndex], ...action.updates };
      return [...state.slice(0, projectIndex), updatedProject, ...state.slice(projectIndex + 1)];
    }
    case 'DELETE_PROJECT':
      return state.filter(project => project.id !== action.id);
    default:
      return state;
  }
};
