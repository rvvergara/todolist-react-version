import uuid from 'uuid';

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
  addProject,
  updateProject,
  deleteProject,
};
