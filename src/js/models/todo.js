import uuid from 'uuid';

export default class Todo {
  constructor(todoEntry) {
    const {
      title,
      description,
      dueDate,
      priority,
      notes,
      id,
      projectID,
    } = todoEntry;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.projectID = projectID;
    this.id = id;
    this.done = false;
  }
}
