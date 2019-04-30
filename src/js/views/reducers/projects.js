export default (state = [], action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return [...state, ...action.projects]

    case 'ADD_PROJECT':
    {
      const index = state.findIndex(project => project.name === action.project.name);
      return index === -1 ? state.concat(action.project) : state;
    }

    case 'UPDATE_PROJECT':
    {
      const { name } = action.updates;
      const conflictIndex = state.findIndex(project => project.name === name);
      const projectIndex = state.findIndex(project => project.id === action.id);
      const updatedProject = { ...state[projectIndex], ...action.updates };
      return conflictIndex === -1 ? [...state.slice(0, projectIndex), updatedProject, ...state.slice(projectIndex + 1)] : state;
    }
    case 'DELETE_PROJECT':
      return state.filter(project => project.id !== action.id);
    default:
      return state;
  }
};
