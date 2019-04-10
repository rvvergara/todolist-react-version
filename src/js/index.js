import {
  createProjectsArray,
  createDefaultProject,
}
from "./controllers/helpers/projects/projectHelpers";

import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './views/components/TodoListApp';
import '../css/styles.scss';

createProjectsArray();
createDefaultProject();

ReactDOM.render(<TodoListApp />, document.getElementById('app'));
