import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './views/store/configureStore';
import {
  createProjectsArray,
  createDefaultProject,
}
  from './controllers/helpers/projects/projectHelpers';
import { createTodosArray } from './controllers/helpers/todos/todoHelpers';
import TodoListApp from './views/components/TodoListApp';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import '../scss/styles.scss';

createProjectsArray();
createDefaultProject();
createTodosArray();

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <TodoListApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
