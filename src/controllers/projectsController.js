import Project from '../models/project';

const projectsController = (
  () => {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray")) ? JSON.parse(localStorage.getItem("projectsArray")) : [];
    return {
      create(name) {
        if (name === "") name = "Project Name (Please customize name)";
        let project = new Project(name);
        localStorage.setItem(name, JSON.stringify(project));
        projectsArray.push(project);
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
        return project;
      },
      update(name) {
        // Extract the right project
        let project = JSON.parse(localStorage.getItem(name));
        let index = projectsArray.findIndex(x => x.name === project.name);
        project.name = document.getElementById("projectName").value;
        projectsArray.splice(index, 1, project);
        localStorage.setItem(project.name, project);
        localStorage.setItem("projectsArray", projectsArray);
        return project;
      },
      delete(name) {
        // let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
        let project = JSON.parse(localStorage.getItem(name));
        let index = projectsArray.findIndex(x => x.name === project.name);
        localStorage.removeItem(name);
        projectsArray.splice(index, 1);
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
      }
    };
  }
)();

export default projectsController;