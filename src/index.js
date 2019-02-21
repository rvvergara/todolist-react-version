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

document.getElementById("addTodoBtn").addEventListener('click', e => {
  e.stopPropagation();
  e.target.setAttribute("class", "d-none");
  document.getElementById("todosForm").setAttribute("class", "mt-3");
});