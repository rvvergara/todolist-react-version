import formsReducer from '../../../views/reducers/forms';
import projects from '../../fixtures/projects';

describe('formsReducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
      addProjectMode: false,
      editProjectMode: false,
      projectBeingEdited: undefined,
    };
  });

  test('it should change addProjectMode to true when initially false', () => {
    const action = { type: 'SWITCH_ADD_PROJECT' };
    expect(formsReducer(defaultState, action).addProjectMode).toBe(true);
  });

  test('it should make addProjectMode false when initially true', () => {
    const action = { type: 'SWITCH_ADD_PROJECT' };
    defaultState.addProjectMode = true;
    expect(formsReducer(defaultState, action).addProjectMode).toBe(false);
  });

  test('it should change editProjectMode to true when initially false', () => {
    const action = { type: 'SWITCH_EDIT_PROJECT' };
    expect(formsReducer(defaultState, action).editProjectMode).toBe(true);
  });

  test('it should make editProjectMode false when initially true', () => {
    const action = { type: 'SWITCH_EDIT_PROJECT' };
    defaultState.editProjectMode = true;
    expect(formsReducer(defaultState, action).editProjectMode).toBe(false);
  });

  test('it should set project currently being edited', () => {
    const action = {
      type: 'SET_PROJECT_FOR_EDIT',
      id: projects[1].id,
    };
    expect(formsReducer(defaultState, action).projectBeingEdited).toBe(projects[1].id);
  });
});
