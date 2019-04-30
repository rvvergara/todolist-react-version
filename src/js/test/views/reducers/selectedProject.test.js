import selectedProjectReducer from '../../../views/reducers/selectedProject';

describe('selectedProject', () => {
  test('should change selectedProject', () => {
    const selectedProject = 'Next Project';
    const action = {
      type: 'SELECT_PROJECT',
      selectedProject,
    };
    const state = selectedProjectReducer('First Project', action);
    expect(state).toBe(selectedProject);
  });
});
