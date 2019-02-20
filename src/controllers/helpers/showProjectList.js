import { showTodoBody } from './showTodoBody';
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
    li.setAttribute("class", "list-group-item");
    li.innerText = "No projects yet, create one";
    document.getElementsByTagName("ul")[0].appendChild(li);
  }
}

const appendNewProject = project => {
  let li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  li.innerText = project.name;
  li.addEventListener('click', ()=> showTodoBody(project.name));
  document.getElementsByTagName("ul")[0].appendChild(li);
}

export  {showProjectList, appendNewProject};