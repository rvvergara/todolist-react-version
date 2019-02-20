import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController";
import {showTodoBody} from './controllers/helpers/showTodoBody';

let projects = projectsController.create("Test Project");

let newTodo = todosController.create("Test Todo", "This is just to practice doing this", new Date(), "high", "No notes just this", "Test Project");

let anotherTodo = todosController.create("2Test Todo2", "This is just to practice doing this", new Date(), "high", "No notes just this", "Test Project");

let anotherTodoAgain = todosController.create("3Test Todo3", "This is just to practice doing this", new Date(), "high", "No notes just this", "Test Project");

todosController.delete(projects.name, anotherTodo.title);

showTodoBody(projects.name);
