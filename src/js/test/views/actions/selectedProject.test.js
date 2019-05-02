import {
  selectProject,
} from '../../../views/actions/selectedProject';

describe('selectProject', () => {
  test('should return a valid action', () => {
    const project = {
      id: '226Arra5',
      name: 'My Project',
      description: 'Cool project this is',
    };
    expect(selectProject(project)).toEqual({
      type: 'SELECT_PROJECT',
      project,
    });
  });
});
