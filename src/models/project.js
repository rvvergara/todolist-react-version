export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    let projectCount = Number(localStorage.projectCount);
    this.id = ++projectCount;
    localStorage.setItem("projectCount", projectCount);
  }
  // static incrementCount() {
  //   Project.count++;
  //   return Project.count;
  // }
}

// Project.count = 0;
if (localStorage["projectCount"] === undefined) {
  localStorage.setItem("projectCount", 0);
}