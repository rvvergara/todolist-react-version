import { combineReducers } from 'redux';
import projects from './projects';
import todos from './todos';
import projectForm from './projectForm';
import selectedProject from './selectedProject';

export default combineReducers({
  projects,
  todos,
  projectForm,
  selectedProject,
});
