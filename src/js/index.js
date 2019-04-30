import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './views/store/configureStore';
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

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <TodoListApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
