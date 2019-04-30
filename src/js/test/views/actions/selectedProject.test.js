import {
  selectProject,
} from '../../../views/actions/selectedProject';

describe('selectProject', () => {
  test('should return a valid action', () => {
    expect(selectProject('Next Project')).toEqual({
      type: 'SELECT_PROJECT',
      selectedProject: 'Next Project',
    });
  });
});
