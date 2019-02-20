import Project from '../models/project';

const projectsController = (
  () => {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
    return {
      create(name) {
        let project = new Project(name);
        localStorage.setItem(name, JSON.stringify(project));
        projectsArray.push(project);
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
        return project;
      },
      update() {

      },
      delete(name) {
        localStorage.removeItem(name);
      }
    };
  }
)();

export default projectsController;