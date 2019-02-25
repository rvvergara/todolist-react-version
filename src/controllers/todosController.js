import Todo from "../models/todo";
import {
  getTodoDataFromForm
} from "./helpers/generalHelpers";
const todoController = (
  () => {
    return {
      create(title, description, dueDate, priority, notes = "", project) {
        let todo = new Todo(title, description, dueDate, priority, notes, project);
        // Extract parent project from localStorage
        let parentProject = JSON.parse(localStorage.getItem(project));
        // Push todo into parentProj's todo
        parentProject.todos.push(todo);
        localStorage.setItem(project, JSON.stringify(parentProject));
        return todo;
      },
      update(project, id, projectName) {
        let index = project.todos.findIndex(x => x.id == id);
        let updatedTodoData = getTodoDataFromForm(projectName);
        let todoUpdated = {
          title: updatedTodoData[0],
          description: updatedTodoData[1],
          dueDate: updatedTodoData[2],
          priority: updatedTodoData[3],
          notes: updatedTodoData[4],
          project: updatedTodoData[5],
          id: id
        };
        project.todos.splice(index, 1, todoUpdated);
        localStorage.setItem(project.name, JSON.stringify(project));
      },
      delete(project, id) {
        // Extract parent project
        let parentProject = JSON.parse(localStorage.getItem(project));
        // Find todo from name
        let todoIndex = parentProject.todos.findIndex(x => x.id == id);
        // Splice project
        parentProject.todos.splice(todoIndex, 1);
        localStorage.setItem(project, JSON.stringify(parentProject));
      }
    }
  }
)();

export default todoController;