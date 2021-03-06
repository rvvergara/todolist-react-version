import Project from '../models/project';
import * as localStorageData from './helpers/common/storage';

const projectsController = (
  () => {
    let projectsArray = localStorageData.getDataFromLocalStorage("projectsArray") ? localStorageData.getDataFromLocalStorage("projectsArray") : [];
    if (localStorageData.getDataFromLocalStorage("projectCount") === null) {
      localStorageData.setDataIntoLocalStorage("projectCount", 0);
    }
    return {
      create(name) {
        if (name === "") name = "Project Name (Please customize name)";
        let projectCount = localStorageData.getDataFromLocalStorage("projectCount");
        projectCount += 1;
        let project = new Project(name, projectCount);
        localStorageData.setDataIntoLocalStorage(name, project);
        localStorageData.setDataIntoLocalStorage("projectCount", projectCount);
        projectsArray.push(project);
        localStorageData.setDataIntoLocalStorage("projectsArray", projectsArray);
        return project;
      },
      update(id) {
        const oldProjectName = projectsArray.find(x => x.id === id).name;
        const oldProject = localStorageData.getDataFromLocalStorage(oldProjectName);
        const project = localStorageData.getDataFromLocalStorage(oldProject.name);
        const index = projectsArray.findIndex(x => x.name === project.name);
        project.name = document.getElementById(`project-${id}`).value;
        project.todos = oldProject.todos.slice();
        projectsArray.splice(index, 1, project);
        localStorageData.setDataIntoLocalStorage(project.name, project);
        localStorageData.setDataIntoLocalStorage("projectsArray", projectsArray);
        localStorageData.removeDataFromLocalStorage(oldProject.name);
        return project;
      },
      delete(name) {
        let project = localStorageData.getDataFromLocalStorage(name);
        let projectCount = localStorageData.getDataFromLocalStorage("projectCount");
        let index = projectsArray.findIndex(x => x.name === project.name);
        localStorageData.removeDataFromLocalStorage(name);
        projectsArray.splice(index, 1);
        projectCount -= 1;
        localStorageData.setDataIntoLocalStorage("projectCount", projectCount);
        localStorageData.setDataIntoLocalStorage("projectsArray", projectsArray);
      }
    };
  }
)();



export default projectsController;