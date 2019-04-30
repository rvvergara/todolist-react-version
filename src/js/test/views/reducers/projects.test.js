import projectsReducer from '../../../views/reducers/projects';
import projects from '../../fixtures/projects';

describe('projects reducer', () => {
  test('should add valid project', () => {
    const project = {
      id: 3,
      name: 'Fourth Project',
      description: 'Nisi voluptate exercitation excepteur pariatur sint ex fugiat Lorem adipisicing laboris qui aliqua cupidatat.',
    };
    expect(projectsReducer(projects, { type: 'ADD_PROJECT', project })).toEqual([...projects, project]);
  });

  test('should not add project with a duplicate name', () => {
    const project = {
      id: 3,
      name: projects[0].name,
      description: '',
    };
    expect(projectsReducer(projects, { type: 'ADD_PROJECT', project })).toEqual(projects);
  });

  test('should update an existing project', () => {
    const project = projects[1];
    const updates = { name: 'My project' };
    const action = {
      type: 'UPDATE_PROJECT',
      id: project.id,
      updates,
    };
    const state = projectsReducer(projects, action);
    expect(state[1].name).toBe(updates.name);
  });

  test('should not update a project with the same name as another existing project', () => {
    const project = projects[2];
    const updates = { name: 'Second' };
    const action = {
      type: 'UPDATE_PROJECT',
      id: project.id,
      updates,
    };
    const state = projectsReducer(projects, action);
    expect(state[2].name).not.toBe('Second');
  });

  test('should delete an existing project', () => {
    const { id } = projects[1];
    const action = {
      type: 'DELETE_PROJECT',
      id,
    };
    const state = projectsReducer(projects, action);
    expect(state.length).toBe(2);
  });

  test('should not change if id passed is non-existen', () => {
    const id = 24;
    const action = {
      type: 'DELETE_PROJECT',
      id,
    };
    const state = projectsReducer(projects, action);
    expect(state.length).toBe(projects.length);
  });
});
