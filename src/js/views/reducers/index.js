import { combineReducers } from 'redux';
import projects from './projects';
import todos from './todos';

export default combineReducers({
  projects,
  todos,
});
