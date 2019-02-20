import projectsController from './controllers/projectsController';

let projects = projectsController.create("proj-1");
projectsController.delete("proj-1");
console.log(projects);