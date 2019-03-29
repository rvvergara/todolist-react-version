import Todo from "../models/todo";
import {
  getTodoDataFromForm,
} from './helpers/todos/todoHelpers';

import * as localStorageData from './helpers/common/storage';

const todoController = (
  () => ({
    create(title, description, dueDate, priority, notes, project) {
      const todo = new Todo(title, description, dueDate, priority, notes, project);
      // Extract parent project from localStorage
      const parentProject = localStorageData.getDataFromLocalStorage(project);
      // Push todo into parentProj's todo
      parentProject.todos.push(todo);
      localStorageData.setDataIntoLocalStorage(project, parentProject);
      return todo;
    },
    update(project, id, projectName) {
      const index = project.todos.findIndex(x => x.id === id);
      const {
        done,
      } = project.todos[index];
      const [title, description, dueDate, priority, notes, name] = getTodoDataFromForm(projectName);
      const todoUpdated = {
        title,
        description,
        dueDate,
        priority,
        notes,
        project: name,
        done,
        id,
      };
      project.todos.splice(index, 1, todoUpdated);
      localStorageData.setDataIntoLocalStorage(project.name, project);
    },
    delete(project, id) {
      // Extract parent project
      const parentProject = localStorageData.getDataFromLocalStorage(project);
      // Find todo from name
      const todoIndex = parentProject.todos.findIndex(x => x.id === id);
      // Splice project
      parentProject.todos.splice(todoIndex, 1);
      localStorageData.setDataIntoLocalStorage(project, parentProject);
    },
  })
)();

export default todoController;