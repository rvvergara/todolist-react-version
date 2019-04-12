import projectsController from '../../projectsController';

import * as localStorageData from '../common/storage';

export const createProjectsArray = () => {
  if (localStorageData.getDataFromLocalStorage('projectsArray') === null) {
    let projectsArray = [];
    localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
  }
};

// Create a default project for new users or after localstorage is cleared
export const createDefaultProject = () => {
  if (localStorageData.getDataFromLocalStorage('projectCount') === 0) {
    const defaultProject = projectsController.create('Default Project');
  }
  if (localStorageData.getDataFromLocalStorage('Default Project') !== null) {
    const defaultProject = localStorageData.getDataFromLocalStorage('Default Project');
  }
};

// Adding event listener to Project Form
// document.getElementById('projectNameForm').addEventListener('submit', e => {
//   e.preventDefault();
//   submitProjectForm(e.target);
// });
// // Adding event listener to Add Project Btn
// document.getElementById('addProjBtn').addEventListener('click', e => {
//   const action = 'new';
//   showProjectForm(e.target, action);
// });