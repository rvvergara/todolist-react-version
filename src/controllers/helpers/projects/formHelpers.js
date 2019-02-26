import projectsController from "../../projectsController";
import {
  appendNewProject
} from "./projectHelpers";

export const submitProjectForm = target => {
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
};