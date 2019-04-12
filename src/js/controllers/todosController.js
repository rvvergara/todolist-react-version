import Todo from "../models/todo";
import {
  getTodoDataFromForm,
  updateProjectsArray,
  pushTodoToProject,
} from './helpers/todos/todoHelpers';

import * as localStorageData from './helpers/common/storage';

const todoController = (
  () => ({
    create(title, description, dueDate, priority, notes, project) {
      const todo = new Todo(title, description, dueDate, priority, notes, project);
      pushTodoToProject(todo);
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
      const todoIndex = parentProject.todos.findIndex(x => x.id === Number(id));
      // Splice project
      parentProject.todos.splice(todoIndex, 1);
      localStorageData.setDataIntoLocalStorage(project, parentProject);
      updateProjectsArray(parentProject);
    },
  })
)();

export default todoController;