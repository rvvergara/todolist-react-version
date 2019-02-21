import projectsController from './controllers/projectsController';
import {
  showProjectList,
  appendNewProject,
  showProjectForm
} from "./controllers/helpers/showProjectList";


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
  submitForm(e.target);
});

const submitForm = target => {
  let name = document.getElementById("projectName").value;
  // if data-action == new then this
  if (target.getAttribute("data-action") === "new") {
    createNewProject(name);
  } else {
    updateProject(target);
  }
  target.setAttribute("class", "d-none");
  target.reset();
  document.getElementById("addProjBtn").setAttribute("class", "btn btn-sm btn-primary mt-2");
};

// Create New

const createNewProject = name => {
  let project = projectsController.create(name);
  appendNewProject(project);
};

// Update project
const updateProject = target => {
  let updatedProject = projectsController.update(Number(target.getAttribute("data-id")));
  document.getElementById(`update-proj-${target.getAttribute("data-id")}`).setAttribute("class", "btn btn-sm btn-info ml-3");
  document.getElementById(`projectSpan-${target.getAttribute("data-id")}`).innerText = updatedProject.name;
}

// Logic for Add New Project Button
document.getElementById("addProjBtn").addEventListener("click", e => {
  let action = "new";
  showProjectForm(e.target, action);
});