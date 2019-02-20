import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController";
import showProjectList from "./controllers/helpers/showProjectList"
import {
  showTodoBody
} from './controllers/helpers/showTodoBody';

let projectsArray = [{
  name: "Default Project",
  todos: [],
  id: 0
}];
localStorage.setItem("projectsArray", JSON.stringify(projectsArray));

showProjectList();