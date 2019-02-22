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
  generateAddTodoBtn
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


// Adding a new todo into a project
document.getElementById("todosForm").addEventListener("submit", e => {
  e.preventDefault();
  let inputs = document.getElementsByClassName("todo-form");
  let title = inputs[0].value;
  let description = inputs[1].value;
  let dueDate = new Date(inputs[2].value).toDateString();
  let priority = document.getElementsByTagName("select")[0].value;
  let projectsArray = JSON.parse(localStorage["projectsArray"]);
  let index = Number(e.target.getAttribute("data-id"));
  let project = projectsArray.find(x => x.id === index);
  let notes = inputs[3].value;
  todosController.create(title, description, dueDate, priority, notes, project.name);
  console.log("Submitted Todo");
  e.target.reset();
  // e.target.setAttribute("class", "d-none");
  document.getElementById("todosSection").setAttribute("class", "d-none");
  generateAddTodoBtn(project);
});