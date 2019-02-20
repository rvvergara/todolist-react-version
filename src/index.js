import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController"

let projects = projectsController.create("Test Project");

let newTodo = todosController.create("Test Todo", "This is just to practice doing this", new Date(), "high", "No notes just this", "Test Project");