import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from '../../../views/actions/projects';
import projects from '../../fixtures/projects';

describe('getProjects', () => {
  test('return a valid action', () => {
    expect(getProjects(projects)).toEqual({
      type: 'GET_PROJECTS',
      projects,
    });
  });
});

describe('addProject', () => {
  let newProject;
  beforeEach(() => {
    newProject = {
      name: 'Some Name',
      description: 'Some description',
    };
  });

  test('it should return a valid project action', () => {
    const action = addProject(newProject);
    expect(action).toEqual({
      type: 'ADD_PROJECT',
      project: {
        id: expect.any(String),
        ...newProject,
        todos: [],
      },
    });
  });

  test('should return action with default values', () => {
    const action = addProject();
    expect(action).toEqual({
      type: 'ADD_PROJECT',
      project: {
        id: expect.any(String),
        name: 'PROJECT',
        description: 'SOME PROJECT',
        todos: [],
      },
    });
  });
});

describe('updateProject', () => {
  test('should return a valid action', () => {
    const updates = { name: '2nd Project' };
    expect(updateProject(0, updates)).toEqual({
      type: 'UPDATE_PROJECT',
      id: 0,
      updates,
    });
  });
});

describe('deleteProject', () => {
  test('should return a valid action', () => {
    expect(deleteProject(0)).toEqual({
      type: 'DELETE_PROJECT',
      id: 0,
    });
  });
});
