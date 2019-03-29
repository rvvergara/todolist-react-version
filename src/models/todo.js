export default class Todo {
  constructor(title, description, dueDate, priority, notes = "", project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.id = Math.round(Math.random() * 999999999999999999999, 0);
    this.done = false;
  }
}