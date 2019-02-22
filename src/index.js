import {
  showProjectList,
  showProjectForm
} from "./controllers/helpers/projectListHelpers";

import {
  submitProjectForm
} from "./controllers/helpers/formHelpers";

import {
  createProjectsArray,
  createDefaultProject,
  submitTodoCallBack,
} from './controllers/helpers/generalHelpers';

import todosController from "./controllers/todosController"

import {
  showTodoBody
} from "./controllers/helpers/showTodoBody";

createProjectsArray();
createDefaultProject();
showProjectList();

// For refactor:
document.getElementById("projectNameForm").addEventListener('submit', e => {
  e.preventDefault();
  submitProjectForm(e.target);
});


// Logic for Add New Project Button
document.getElementById("addProjBtn").addEventListener("click", e => {
  let action = "new";
  showProjectForm(e.target, action);
});


// Adding a new todo into a project
document.getElementById("todosForm").addEventListener("submit", e => {
  e.preventDefault();
  submitTodoCallBack(e.target);
});