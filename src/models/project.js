export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = Project.incrementCount();
  }
  static incrementCount() {
    Project.count++;
    return Project.count;
  }
}

Project.count = 0;