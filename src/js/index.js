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
import TodoListApp from './views/components/TodoListApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/styles.scss';
import { addTodo } from './views/actions/todos';

createProjectsArray();
createDefaultProject();

const store = configureStore();

const newTodo = {
  title: 'Unang Task',
  description: 'In elit occaecat tempor officia proident culpa enim ut deserunt aute duis consequat duis laborum.',
  dueDate: moment().add(5, 'days').valueOf(),
  notes: 'Labore magna laboris culpa et tempor deserunt pariatur in qui.',
};

store.dispatch(addTodo(newTodo, 'Default Project'));

const jsx = (
  <Provider store={store}>
    <TodoListApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
