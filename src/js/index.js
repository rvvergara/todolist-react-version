import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import configureStore from './views/store/configureStore';
import {
  createProjectsArray,
  createDefaultProject,
}
  from './controllers/helpers/projects/projectHelpers';
import { createTodosArray } from './controllers/helpers/todos/todoHelpers';
import TodoListApp from './views/components/TodoListApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';
import '../scss/styles.scss';
import { addTodo } from './views/actions/todos';

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
