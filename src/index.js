import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController";
import {
  showProjectList,
  appendNewProject,
  showProjectForm
} from "./controllers/helpers/showProjectList";
import {
  showTodoBody
} from './controllers/helpers/showTodoBody';


if (localStorage.getItem("projectsArray") === null) {
  let projectsArray = [];
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

if (localStorage["projectCount"] === "0") {
  let defaultProject = projectsController.create("Default Project");
}


showProjectList();


// Candidates for transfer into their own modules
// Logic for New Project Submission
document.getElementById("projectNameForm").addEventListener('submit', e => {
  e.preventDefault();
  let name = document.getElementById("projectName").value;
  // if data-action == new then this
  if (e.target.getAttribute("data-action") === "new") {
    let project = projectsController.create(name);
    appendNewProject(project);
  } else {
    console.log(e.target);
    projectsController.update(Number(e.target.getAttribute("data-id")));
  }

  e.target.setAttribute("class", "d-none");
  e.target.reset();
  document.getElementById("addProjBtn").setAttribute("class", "btn btn-sm btn-primary mt-2");
});
// Logic for Add New Project Button
document.getElementById("addProjBtn").addEventListener("click", e => {
  let action = "new";
  showProjectForm(e.target, action)
});