import {
  showTodoBody,
  extractProject
} from '../todos/todoBody';
import projectsController from "../../projectsController";

import {
  generateAddTodoBtn
} from "../todos/todoHelpers";

export const showProjectList = () => {
  // show project list only if there are projects in the projectsArray
  let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
  if (projectsArray.length > 0) {
    // Display should show all projects in li's
    projectsArray.forEach(project => {
      appendNewProject(project);
    });
  } else {
    // The display should show "No Projects Yet"
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item emptyMessage");
    li.innerText = "No projects yet, create one";
    document.getElementsByTagName("ul")[0].appendChild(li);
  }
}

// Function to append created project into the DOM
export const appendNewProject = project => {
  // Remove any empty project messages
  removeEmptyProjMessage();
  // Generate project li
  generateProjectLi(project);
};

// Function to remove any empty project message
const removeEmptyProjMessage = () => {
  let emptyLi = document.getElementsByClassName("emptyMessage")[0];
  if (emptyLi !== undefined) {
    document.getElementsByTagName("ul")[0].removeChild(emptyLi);
  }
};

//  Generate project li's
const generateProjectLi = project => {
  let li = document.createElement("li"),
    span = document.createElement("span"),
    deleteBtn = generateBtn("delete", project),
    updateBtn = generateBtn("update", project);

  // Give span an id based on project's id and an innerText equal to project's name
  span.setAttribute("id", `projectSpan-${project.id}`);
  span.innerText = project.name;

  // Give each li a class of list-group-item and id based on project's id
  li.setAttribute("class", "list-group-item");
  li.setAttribute("id", `projectLi-${project.id}`);

  // Add click event listener to each li
  li.addEventListener('click', () => {
    // Override the existing project with updated project
    project = JSON.parse(localStorage.projectsArray).find(x => x.id === project.id);
    generateAddTodoBtn(project);
    showTodoBody(project.name);
  });

  // Append the span, deleteBtn and updateBtn to li
  [span, deleteBtn, updateBtn].forEach(element => li.appendChild(element));
  document.getElementsByTagName("ul")[0].appendChild(li);
};

// Function to create buttons for project
export const generateBtn = (action, project) => {
  let btn = createBtnElement(action, project);
  addBtnEventListeners(btn, project, action);
  return btn;
};

// Function to create btn html element
const createBtnElement = (action, project) => {
  let btnType = action === "update" ? "btn-info" : "btn-danger",
    btnId = action === "update" ? `update-proj-${project.id}` : `delete-proj-${project.id}`,
    btn = document.createElement("button");

  // Give each button bootstrap classes as well as a class to distinguish which kind of btn it is, also give it an id depending on what kind of action it is doing and on the project's id
  btn.setAttribute("class", `btn btn-sm ml-3 ${btnType}`);
  btn.setAttribute("id", btnId);


  // Set inner text based on what action it will do
  btn.innerText = action.toUpperCase();

  // Give btn a data-action attribute if it's an update button
  if (action === "update") {
    btn.setAttribute("data-id", `${project.id}`);
  }
  return btn;
};

// Adding event listeners to btns
const addBtnEventListeners = (btn, project, action) => {

  btn.addEventListener("click", e => {
    e.stopPropagation();
    // Override the existing project with updated project
    project = JSON.parse(localStorage.projectsArray).find(x => x.id === project.id);
    // call here function appropriate for type of action
    action === "update" ? updateCallback(e.target, project) : deleteCallback(project);
  });
};

// Callback for clicking update btn
const updateCallback = (target, project) => {
  let action = "update";
  showProjectForm(target, action, target.getAttribute("data-id"));
  document.getElementById("projectName").value = project.name;
};

// Logic for showing the project form
export const showProjectForm = (target, action, id) => {
  let projectNameForm = document.getElementById("projectNameForm");
  projectNameForm.removeAttribute("class");
  projectNameForm.setAttribute("data-action", action);
  projectNameForm.setAttribute("data-id", id);
  target.setAttribute("class", "d-none");
};

// Callback for delete btn
const deleteCallback = project => {
  projectsController.delete(project.name);
  removeProjFromList(project);
};


// Function to remove a project from DOM display
const removeProjFromList = project => {
  let projectLi = document.getElementById(`projectLi-${project.id}`);
  document.getElementsByTagName("ul")[0].removeChild(projectLi);
  if (localStorage.projectsArray === "[]") {
    // The display should show "No Projects Yet"
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item emptyMessage");
    li.innerText = "No projects yet, create one";
    document.getElementsByTagName("ul")[0].appendChild(li);
  }
};

// Creating a projects array for new users or after localstorage is cleared

export const createProjectsArray = () => {
  if (localStorage.getItem("projectsArray") === null) {
    let projectsArray = [];
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  }
};

// Create a default project for new users or after localstorage is cleared
export const createDefaultProject = () => {
  if (localStorage["projectCount"] === "0") {
    let defaultProject = projectsController.create("Default Project");
  }

  if (localStorage["Default Project"] !== undefined) {
    let defaultProject = JSON.parse(localStorage["Default Project"]);
    generateAddTodoBtn(defaultProject);

    showTodoBody(defaultProject.name);
  };
};