import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController";
import {showProjectList,appendNewProject} from "./controllers/helpers/showProjectList";
import {
  showTodoBody
} from './controllers/helpers/showTodoBody';


if (localStorage.getItem("projectsArray") === null ) {
  let projectsArray = [];
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  if (localStorage.getItem("Default Project") === null ) {
  let defaultProject = projectsController.create("Default Project");
}
}


showProjectList();

document.getElementById("projectNameForm").addEventListener('submit', e=>{
  e.preventDefault();
  let name = document.getElementById("projectName").value;
  let project = projectsController.create(name);
  appendNewProject(project);
  document.getElementById("projectName").value = "";
});

