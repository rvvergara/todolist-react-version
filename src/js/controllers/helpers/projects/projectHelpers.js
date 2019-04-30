import uuid from 'uuid';

import projectsController from '../../projectsController';

import * as localStorageData from '../common/storage';

export const createProjectsArray = () => {
  if (localStorageData.getDataFromLocalStorage('projectsArray') === null) {
    const projectsArray = [];
    localStorageData.setDataIntoLocalStorage('projectsArray', projectsArray);
  }
};

// Create a default project for new users or after localstorage is cleared
export const createDefaultProject = () => {
  if (localStorageData.getDataFromLocalStorage('projectCount') === 0) {
    const defaultProject = projectsController.create('Default Project', uuid());
  }
  if (localStorageData.getDataFromLocalStorage('Default Project') !== null) {
    const defaultProject = localStorageData.getDataFromLocalStorage('Default Project');
  }
};
