import Project from '../models/project';
import * as localStorageData from './helpers/common/storage';

const projectsController = (
  () => {
    const projectsArray = localStorageData.getDataFromLocalStorage('projectsArray') ? localStorageData.getDataFromLocalStorage('projectsArray') : [];
    if (localStorageData.getDataFromLocalStorage('projectCount') === null) {
      localStorageData.setDataIntoLocalStorage('projectCount', 0);
    }
    return {
      create(name, id) {
        if (name === '') name = 'Project Name (Please customize name)';
        let projectCount = localStorageData.getDataFromLocalStorage('projectCount');
        projectCount += 1;
        const project = new Project(name, id);
        localStorageData.setDataIntoLocalStorage(name, project);
        localStorageData.setDataIntoLocalStorage('projectCount', projectCount);
        projectsArray.push(project);
        localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
        return project;
      },
      update(id, updates) {
        const oldProjectName = projectsArray.find(x => x.id === id).name;
        const oldProject = localStorageData.getDataFromLocalStorage(oldProjectName);
        const project = localStorageData.getDataFromLocalStorage(oldProject.name);
        const index = projectsArray.findIndex(x => x.name === project.name);
        project.name = updates.name;
        project.todos = oldProject.todos.slice();
        projectsArray.splice(index, 1, project);
        localStorageData.setDataIntoLocalStorage(project.name, project);
        localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
        localStorageData.removeDataFromLocalStorage(oldProject.name);
        return project;
      },
      delete(id) {
        const projectsArray = localStorageData.getDataFromLocalStorage('projectsArray');
        const projectCount = localStorageData.getDataFromLocalStorage('projectCount');
        const todosArray = localStorageData.getDataFromLocalStorage('todosArray');
        const projectInArray = projectsArray.find(project => project.id === id);
        const projectStandAlone = localStorageData.getDataFromLocalStorage(projectInArray.name);
        // Delete all project todos
        const newTodosArray = todosArray.filter(todo => todo.projectID !== projectStandAlone.id);
        localStorageData.setDataIntoLocalStorage('todosArray', newTodosArray);
        // Delete stand alone project
        localStorageData.removeDataFromLocalStorage(projectInArray.name);
        // Delete project from projectsArray
        const newProjectsArray = projectsArray.filter(project => project.id !== projectInArray.id);
        localStorageData.setDataIntoLocalStorage('projectsArray', newProjectsArray);
        // Reduce project count in localstorage by 1
        localStorageData.setDataIntoLocalStorage('projectCount', projectCount - 1);
      },
    };
  }
)();


export default projectsController;
