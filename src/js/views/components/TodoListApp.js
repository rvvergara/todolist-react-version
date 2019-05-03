import React from 'react';
import ProjectList from './ProjectList';
import Todos from './Todos';

const TodoListApp = () => (
  <div id="todo-app">
    <header>
      <h1 className="header__h1">Todo List App</h1>
    </header>
    <ProjectList />
    <Todos />
  </div>
);

export default TodoListApp;
