import projectsController from './controllers/projectsController';

import {
  showProjectList,
  showProjectForm
} from "./controllers/helpers/projectListHelpers";

import {
  submitProjectForm
} from "./controllers/helpers/formHelpers";

if (localStorage.getItem("projectsArray") === null) {
  let projectsArray = [];
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

if (localStorage["projectCount"] === "0") {
  let defaultProject = projectsController.create("Default Project");
}


showProjectList();


// For refactor
document.getElementById("projectNameForm").addEventListener('submit', e => {
  e.preventDefault();
  submitProjectForm(e.target);
});


// Logic for Add New Project Button
document.getElementById("addProjBtn").addEventListener("click", e => {
  let action = "new";
  showProjectForm(e.target, action);
});