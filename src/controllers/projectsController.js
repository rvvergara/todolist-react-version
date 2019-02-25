import Project from '../models/project';

const projectsController = (
  () => {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray")) ? JSON.parse(localStorage.getItem("projectsArray")) : [];
    return {
      create(name) {
        if (name === "") name = "Project Name (Please customize name)";
        let project = new Project(name);
        // localStorage.setItem(name, JSON.stringify(project));
        saveToLocalStorage(name, project);
        projectsArray.push(project);
        saveToLocalStorage("projectsArray", projectsArray);
        return project;
      },
      update(id) {
        let oldProjectName = projectsArray.find(x => x.id === id).name;
        let oldProject = JSON.parse(localStorage[oldProjectName]);
        let project = JSON.parse(localStorage[oldProject.name]);
        let index = projectsArray.findIndex(x => x.name === project.name);
        project.name = document.getElementById("projectName").value;
        project.todos = oldProject.todos.slice();
        projectsArray.splice(index, 1, project);
        saveToLocalStorage(project.name, project);
        saveToLocalStorage("projectsArray", projectsArray);
        localStorage.removeItem(oldProject.name);
        return project;
      },
      delete(name) {
        let project = JSON.parse(localStorage[name]);
        let index = projectsArray.findIndex(x => x.name === project.name);
        localStorage.removeItem(name);
        projectsArray.splice(index, 1);
        saveToLocalStorage("projectsArray", projectsArray);
      }
    };
  }
)();

const saveToLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export default projectsController;