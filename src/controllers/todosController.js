import Todo from "../models/todo"

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
      update() {},
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