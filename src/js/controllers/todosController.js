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

    update(todoData) {
      const projectsArray = localStorageData.getDataFromLocalStorage('projectsArray');
      const todosArray = localStorageData.getDataFromLocalStorage('todosArray');
      const projectInArray = projectsArray.find(project => project.id === todoData.projectID);
      const projectIndexInArray = projectsArray.findIndex(project => project.id === todoData.projectID);
      const projectStandAlone = localStorageData.getDataFromLocalStorage(projectInArray.name);
      const todoIndexInProject = projectStandAlone.todos.findIndex(todo => todo.id === todoData.id);
      const todoIndexInTodosArray = todosArray.findIndex(todo => todo.id === todoData.id);
      // 1. Change todo in todosArray
      todosArray[todoIndexInTodosArray] = todoData;
      localStorageData.setDataIntoLocalStorage('todosArray', todosArray);
      // 2. Change todo is project
      projectStandAlone[todoIndexInProject] = todoData;
      localStorageData.setDataIntoLocalStorage(projectStandAlone.name, projectStandAlone);
      // 3. Change project in projectsArray
      projectsArray[projectIndexInArray] = projectStandAlone;
      localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
    },

    delete(project, id) {
      // Extract parent project
      const parentProject = localStorageData.getDataFromLocalStorage(project);
      // Find todo from name
      const todoIndex = parentProject.todos.findIndex(x => x.id === Number(id));
      // Splice project
      parentProject.todos.splice(todoIndex, 1);
      localStorageData.setDataIntoLocalStorage(project, parentProject);
      updateProjectsArray(parentProject);
    },
  })
)();

export default todoController;
