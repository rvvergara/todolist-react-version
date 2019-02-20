import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController";
import showProjectList from "./controllers/helpers/showProjectList";
import {
  showTodoBody
} from './controllers/helpers/showTodoBody';
let defaultProject = {
  name: "Default Project",
  todos: [],
  id: 0
};
let projectsArray = [defaultProject];
localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
localStorage.setItem("Default Project", JSON.stringify(defaultProject));


showProjectList();