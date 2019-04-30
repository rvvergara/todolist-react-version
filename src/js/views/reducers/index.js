import { combineReducers } from 'redux';
import projects from './projects';
import todos from './todos';
import selectedProject from './selectedProject';

export default combineReducers({
  projects,
  todos,
  selectedProject,
});
