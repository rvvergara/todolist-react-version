import Todo from '../models/todo';
import {
  updateProjectsArray,
  pushTodoToProject,
} from './helpers/todos/todoHelpers';

import * as localStorageData from './helpers/common/storage';

const todoController = (
  () => ({
    create(todoEntry) {
      const todo = new Todo(todoEntry);
      pushTodoToProject(todo);
      return todo;
    },

    update(id, updates) {
      const projectsArray = localStorageData.getDataFromLocalStorage('projectsArray');
      const todosArray = localStorageData.getDataFromLocalStorage('todosArray');
      const todoFromArray = todosArray.find(todo => todo.id === id);
      const projectInArray = projectsArray.find(project => project.id === todoFromArray.projectID);
      const projectIndexInArray = projectsArray.findIndex(project => project.id === projectInArray.id);
      const projectStandAlone = localStorageData.getDataFromLocalStorage(projectInArray.name);
      const todoIndexInProject = projectStandAlone.todos.findIndex(todo => todo.id === id);
      const todoIndexInTodosArray = todosArray.findIndex(todo => todo.id === id);
      const updatedTodo = { ...todoFromArray, ...updates };
      // 1. Change todo in todosArray
      todosArray[todoIndexInTodosArray] = updatedTodo;
      localStorageData.setDataIntoLocalStorage('todosArray', todosArray);
      // 2. Change todo is project
      projectStandAlone[todoIndexInProject] = updatedTodo;
      localStorageData.setDataIntoLocalStorage(projectStandAlone.name, projectStandAlone);
      // 3. Change project in projectsArray
      projectsArray[projectIndexInArray] = projectStandAlone;
      localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
    },

    delete(id) {
      const projectsArray = localStorageData.getDataFromLocalStorage('projectsArray');
      const todosArray = localStorageData.getDataFromLocalStorage('todosArray');
      const todoInArray = todosArray.find(todo => todo.id === id);
      const projectIndexInArray = projectsArray.findIndex(project => project.id === todoInArray.projectID);
      const projectInArray = projectsArray.find(project => project.id === todoInArray.projectID);
      const projectStandAlone = localStorageData.getDataFromLocalStorage(projectInArray.name);
      // 1. Remove todo in todosArray
      const newTodosArray = todosArray.filter(todo => todo.id !== todoInArray.id);
      localStorageData.setDataIntoLocalStorage('todosArray', newTodosArray);
      // 2. Remove todo in project
      const newProjectsTodos = projectStandAlone.todos.filter(todo => todo.id !== todoInArray.id);
      const newProject = { ...projectStandAlone, todos: newProjectsTodos };
      localStorageData.setDataIntoLocalStorage(projectStandAlone.name, newProject);
      // 3. Update projectsArray
      projectsArray[projectIndexInArray] = newProject;
      localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
    },
  })
)();

export default todoController;
