import { combineReducers } from 'redux';
import projects from './projects';
import todos from './todos';
import forms from './forms';
import selectedProject from './selectedProject';

export default combineReducers({
  projects,
  todos,
  forms,
  selectedProject,
});
