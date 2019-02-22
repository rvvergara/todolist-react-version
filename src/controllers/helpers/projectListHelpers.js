import {
  showTodoBody
} from './showTodoBody';
import projectsController from "../projectsController"

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

export const appendNewProject = project => {

  removeEmptyProjMessage();
  generateProjectLi(project);
};

// Upon appending a new project to ul remove emptyMessage
const removeEmptyProjMessage = () => {
  let emptyLi = document.getElementsByClassName("emptyMessage")[0];
  if (emptyLi !== undefined) {
    document.getElementsByTagName("ul")[0].removeChild(emptyLi);
  }
};

//  Generate projec's li

const generateProjectLi = project => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.setAttribute("id", `projectSpan-${project.id}`);

  let deleteBtn = generateBtn("delete", project);
  let updateBtn = generateBtn("update", project);
  li.setAttribute("class", "list-group-item");
  li.setAttribute("id", `projectLi-${project.id}`)
  span.innerText = project.name;
  li.appendChild(span);
  li.addEventListener('click', () => {
    let btn = genrateAddTodoBtn(project);
    if (document.getElementsByClassName("addTodoBtn")[0] !== undefined) {
      document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]);
    }

    if (document.getElementById(`addTodoBtn-${project.id}`) === null) {
      document.getElementById("todosDiv").appendChild(btn);
    }
    showTodoBody(project.name);
  });
  li.appendChild(deleteBtn);
  li.appendChild(updateBtn);
  document.getElementsByTagName("ul")[0].appendChild(li);
};

export const genrateAddTodoBtn = project => {
  let btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-sm btn-block btn-primary addTodoBtn");
  btn.setAttribute("id", `addTodoBtn-${project.id}`);
  btn.setAttribute("data-id", project.id);
  btn.innerText = `Add Todo for ${project.name}`;
  btn.addEventListener("click", e => {
    e.stopPropagation();
    let dataId = e.target.getAttribute("data-id");
    console.log(dataId);
    e.target.setAttribute("class", "d-none");
    document.getElementById("todosSection").setAttribute("class", "mt-3");
    document.getElementById("todosForm").setAttribute("data-id", project.id);
  });
  return btn;
};
export const generateBtn = (action, project) => {
  let btn = createBtnElement(action, project);
  addBtnEventListeners(btn, project, action);
  return btn;
};

const createBtnElement = (action, project) => {
  let btnType = action === "update" ? "btn-info" : "btn-danger";
  let btnId = action === "update" ? `update-proj-${project.id}` : `delete-proj-${project.id}`;
  let btn = document.createElement("button");
  btn.setAttribute("class", `btn btn-sm ml-3 ${btnType}`);
  btn.setAttribute("id", btnId);
  btn.innerText = action.toUpperCase();
  if (action === "update") {
    btn.setAttribute("data-id", `${project.id}`);
  }
  return btn;
};

// Adding event listeners to btns
const addBtnEventListeners = (btn, project, action) => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    // call here function appropriate for type of action
    action === "update" ? updateCallback(e.target, project) : deleteCallback(project);
  });
};

const updateCallback = (target, project) => {
  let action = "update";
  showProjectForm(target, action, target.getAttribute("data-id"));
  document.getElementById("projectName").value = project.name;
};

// Logic for showing the project form
export const showProjectForm = (target, action, id) => {
  document.getElementById("projectNameForm").removeAttribute("class");
  document.getElementById("projectNameForm").setAttribute("data-action", action);
  document.getElementById("projectNameForm").setAttribute("data-id", id);
  target.setAttribute("class", "d-none");
};

const deleteCallback = project => {
  projectsController.delete(project.name);
  removeProjFromList(project);
};


// Candidates for refactor
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