export default (state = {}, action) => (action.type === 'SELECT_PROJECT' ? action.project : state);
