import uuid from 'uuid';

const getProjects = projects => ({
  type: 'GET_PROJECTS',
  projects,
});

const addProject = ({ name = 'PROJECT', description = 'SOME PROJECT' } = {}) => ({
  type: 'ADD_PROJECT',
  project: {
    id: uuid(),
    name,
    description,
    todos: [],
  },
});

const updateProject = (id, updates) => ({
  type: 'UPDATE_PROJECT',
  id,
  updates,
});

const deleteProject = id => ({
  type: 'DELETE_PROJECT',
  id,
});

export {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};
