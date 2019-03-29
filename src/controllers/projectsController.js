import Project from '../models/project';
import * as localStorageData from './helpers/common/storage';

const projectsController = (
  () => {
    let projectsArray = localStorageData.getDataFromLocalStorage("projectsArray") ? localStorageData.getDataFromLocalStorage("projectsArray") : [];
    return {
      create(name) {
        if (name === "") name = "Project Name (Please customize name)";
        let project = new Project(name);
        localStorageData.setDataIntoLocalStorage(name, project);
        projectsArray.push(project);
        localStorageData.setDataIntoLocalStorage("projectsArray", projectsArray);
        return project;
      },
      update(id) {
        let oldProjectName = projectsArray.find(x => x.id === id).name;
        let oldProject = localStorageData.getDataFromLocalStorage(oldProjectName);
        let project = localStorageData.getDataFromLocalStorage(oldProject.name);
        let index = projectsArray.findIndex(x => x.name === project.name);
        project.name = document.getElementById("projectName").value;
        project.todos = oldProject.todos.slice();
        projectsArray.splice(index, 1, project);
        localStorageData.setDataIntoLocalStorage(project.name, project);
        localStorageData.setDataIntoLocalStorage("projectsArray", projectsArray);
        localStorageData.removeDataFromLocalStorage(oldProject.name);
        return project;
      },
      delete(name) {
        let project = localStorageData.getDataFromLocalStorage(name);
        let index = projectsArray.findIndex(x => x.name === project.name);
        localStorageData.removeDataFromLocalStorage(name);
        projectsArray.splice(index, 1);
        localStorageData.setDataIntoLocalStorage("projectsArray", projectsArray);
      }
    };
  }
)();



export default projectsController;