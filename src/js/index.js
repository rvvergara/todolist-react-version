import React from 'react';
import ReactDOM from 'react-dom';
import {
  createProjectsArray,
  createDefaultProject,
}
  from './controllers/helpers/projects/projectHelpers';
import TodoListApp from './views/components/TodoListApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/styles.scss';

createProjectsArray();
createDefaultProject();

ReactDOM.render(<TodoListApp />, document.getElementById('app'));
