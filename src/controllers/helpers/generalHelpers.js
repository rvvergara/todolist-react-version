import projectsController from '../projectsController';
import {
  showTodoBody
} from './showTodoBody';

import todosController from "../todosController";

import {
  genrateAddTodoBtn
} from './projectListHelpers';
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

  if (localStorage["Default Project"] !== undefined) {
    let defaultProject = JSON.parse(localStorage["Default Project"]);
    let btn = genrateAddTodoBtn(defaultProject);
    if (document.getElementsByClassName("addTodoBtn")[0] !== undefined) {
      document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]);
    }
    if (document.getElementById(`addTodoBtn-${defaultProject.id}`) === null) {
      document.getElementById("todosDiv").appendChild(btn);
    }
    showTodoBody(defaultProject.name);
  };

  // For testing
  let defaultProject = JSON.parse(localStorage["Default Project"]);
  if (defaultProject !== undefined && defaultProject.todos.length === 0) {
    todosController.create("First task", "Basic stuff", new Date().toDateString(), "High", "No notes", "Default Project");

    let btn = genrateAddTodoBtn(defaultProject);
    if (document.getElementsByClassName("addTodoBtn")[0] !== undefined) {
      document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]);
    }

    if (document.getElementById(`addTodoBtn-${defaultProject.id}`) === null) {
      document.getElementById("todosDiv").appendChild(btn);
    }

    showTodoBody("Default Project");
  };

};