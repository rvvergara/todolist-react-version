export default (state = '', action) => (action.type === 'SELECT_PROJECT' ? action.selectedProject : state);
