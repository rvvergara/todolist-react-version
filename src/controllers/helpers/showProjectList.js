import {
  showTodoBody
} from './showTodoBody';
import projectsController from "../projectsController"

const showProjectList = () => {
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

const appendNewProject = project => {
  // Upon appending a new project to ul remove emptyMessage
  let emptyLi = document.getElementsByClassName("emptyMessage")[0];
  if (emptyLi !== null) document.getElementsByTagName("ul")[0].removeChild(emptyLi);

  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-sm btn-danger ml-3");
  deleteBtn.setAttribute("id", `delete-proj-${project.id}`);
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", e => {
    e.stopPropagation();
    projectsController.delete(project.name);
    removeProjFromList(project);

  })

  li.setAttribute("class", "list-group-item");
  li.setAttribute("id", `projectLi-${project.id}`)
  li.innerText = project.name;
  li.addEventListener('click', () => showTodoBody(project.name));
  li.appendChild(deleteBtn);
  document.getElementsByTagName("ul")[0].appendChild(li);
}

export {
  showProjectList,
  appendNewProject
};

// Candidates for refactor
const removeProjFromList = project => {
  let projectLi = document.getElementById(`projectLi-${project.id}`);
  document.getElementsByTagName("ul")[0].removeChild(projectLi);
}