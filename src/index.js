import {
  showProjectList,
  showProjectForm
} from "./controllers/helpers/projectListHelpers";

import {
  submitProjectForm
} from "./controllers/helpers/formHelpers";

import {
  createProjectsArray,
  createDefaultProject
} from './controllers/helpers/generalHelpers';

import todosController from "./controllers/todosController"

import showTodoBody from "./controllers/helpers/showTodoBody";

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


// Adding event listener to Add New Todo Button
document.getElementById("addTodoBtn").addEventListener('click', e => {
  e.stopPropagation();
  e.target.setAttribute("class", "d-none");
  document.getElementById("todosForm").setAttribute("class", "mt-3");
});

// Adding a new todo into a project
document.getElementById("todosForm").addEventListener("submit", e => {
  e.preventDefault();
  let inputs = document.getElementsByClassName("todo-form");
  let title = inputs[0].value;
  let description = inputs[1].value;
  let dueDate = new Date(inputs[2].value);
  let priority = document.getElementsByTagName("select")[0].value;
  let notes = inputs[3].value;
  todosController.create(title, description, dueDate, priority, notes, )
});