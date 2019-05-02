import Todo from '../models/todo';
import {
  getTodoDataFromForm,
  updateProjectsArray,
  pushTodoToProject,
  updateTodoInProject,
} from './helpers/todos/todoHelpers';

import * as localStorageData from './helpers/common/storage';

const todoController = (
  () => ({
    create(todoEntry) {
      const todo = new Todo(todoEntry);
      pushTodoToProject(todo);
      return todo;
    },

    update(project, id, projectName) {
      const {
        todos,
      } = project;
      const index = todos.findIndex(x => x.id === id);
      const {
        done,
      } = todos[index];

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

      updateTodoInProject(todoUpdated, project, index);

      return todoUpdated;
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
