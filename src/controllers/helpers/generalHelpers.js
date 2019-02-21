import projectsController from '../projectsController';
import {
  showTodoBody
} from './showTodoBody';

import todosController from "../todosController";
// Create projects array

export const createProjectsArray = () => {
  if (localStorage.getItem("projectsArray") === null) {
    let projectsArray = [];
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  }
};

export const createDefaultProject = () => {
  if (localStorage["projectCount"] === "0") {
    let defaultProject = projectsController.create("Default Project");
  }

  if (localStorage["Default Project"] !== undefined) showTodoBody(JSON.parse(localStorage["Default Project"]).name);

  // For testing
  let defaultProject = localStorage["Default Project"]
  if (defaultProject !== undefined && JSON.parse(defaultProject).todos.length === 0) {
    todosController.create("First task", "Basic stuff", new Date().toDateString(), "High", "No notes", "Default Project");

    showTodoBody("Default Project");
  };

};