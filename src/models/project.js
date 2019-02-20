export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = Project.count += 1;
  }
}

Project.count = 0;