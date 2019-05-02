import selectedProjectReducer from '../../../views/reducers/selectedProject';

describe('selectedProject', () => {
  test('should change selectedProject', () => {
    const selectedProject = {
      id: '2',
      name: 'My Project',
      description: 'Not so good',
    };
    const action = {
      type: 'SELECT_PROJECT',
      project: selectedProject,
    };
    const state = selectedProjectReducer({}, action);
    expect(state).toEqual(selectedProject);
  });
});
