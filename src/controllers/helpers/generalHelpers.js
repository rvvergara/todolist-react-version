import projectsController from '../projectsController';
import {
  showTodoBody
} from './showTodoBody';

import todosController from "../todosController";

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
    generateAddTodoBtn(defaultProject);

    showTodoBody(defaultProject.name);
  };

  // For testing
  let defaultProject = JSON.parse(localStorage["Default Project"]);
  if (defaultProject !== undefined && defaultProject.todos.length === 0) {
    todosController.create("First task", "Basic stuff", new Date().toDateString(), "High", "No notes", "Default Project");

    generateAddTodoBtn(defaultProject);
    showTodoBody("Default Project");
  };
};


export const generateAddTodoBtn = project => {
  // If there's an existing addTodoBtn remove it first
  let btn = createAddTodoBtn(project);
  appendAddTodoBtn(btn, project);
  // Also set to invisible any addTodoForm
  if (document.getElementById("todosSection").getAttribute("class") !== "d-none") {
    document.getElementById("todosSection").setAttribute("class", "d-none");
  }
};

const createAddTodoBtn = project => {
  let btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-sm btn-block btn-primary addTodoBtn");
  btn.setAttribute("id", `addTodoBtn-${project.id}`);
  btn.setAttribute("data-id", project.id);
  btn.innerText = `Add Todo for ${project.name}`;
  btn.addEventListener("click", e => {
    e.stopPropagation();
    addTodoClickCallback(e.target, project);
  });
  return btn;
}

const addTodoClickCallback = (target, project) => {
  document.getElementById("todosDiv").removeChild(target);
  document.getElementById("todosSection").setAttribute("class", "mt-3");
  document.getElementById("todosForm").setAttribute("data-id", project.id);
}

const appendAddTodoBtn = (btn, project) => {
  if (document.getElementsByClassName("addTodoBtn")[0]) {
    document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]);
  }

  if (document.getElementById(`addTodoBtn-${project.id}`) === null) {
    document.getElementById("todosDiv").appendChild(btn);
  }
}