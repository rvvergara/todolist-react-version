import {
  showProjectList,
  showProjectForm
}
from "./controllers/helpers/projectHelpers";

import {
  submitProjectForm
} from "./controllers/helpers/formHelpers";

import {
  createProjectsArray,
  createDefaultProject,
  submitTodoCallBack,
} from './controllers/helpers/generalHelpers';

createProjectsArray();
createDefaultProject();
showProjectList();

// For refactor:
// Adding event listener to Project Form
document.getElementById("projectNameForm").addEventListener('submit', e => {
  e.preventDefault();
  submitProjectForm(e.target);
});

// Adding event listener to Add Project Btn
document.getElementById("addProjBtn").addEventListener("click", e => {
  let action = "new";
  showProjectForm(e.target, action);
});


// Event submit event listener for submitting todo form
document.getElementById("todosForm").addEventListener("submit", e => {
  e.preventDefault();
  submitTodoCallBack(e.target);
});