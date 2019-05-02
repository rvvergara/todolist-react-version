import React from 'react';
import { shallow } from 'enzyme';
import uuid from 'uuid';
import { AddNewProject } from '../../../views/components/AddNewProject';
import projectsController from '../../../controllers/projectsController';
import projects from '../../fixtures/projects';

describe('AddNewProject', () => {
  let wrapper;
  let addProject;
  let addProjectModeSwitch;
  let editProjectModeSwitch;
  let addTodoModeSwitch;
  let editTodoModeSwitch;
  let selectProject;
  let addNewProject;

  beforeEach(() => {
    addProject = jest.fn(({ name }) => ({
      type: 'ADD_PROJECT',
      project: {
        name,
        id: uuid(),
      },
    }));
    addProjectModeSwitch = jest.fn();
    editProjectModeSwitch = jest.fn();
    addTodoModeSwitch = jest.fn();
    editTodoModeSwitch = jest.fn();
    selectProject = jest.fn();
    addNewProject = jest.fn();
    wrapper = shallow(
      <AddNewProject
        projects={projects}
        addProjectMode={false}
        editProjectMode={false}
        addTodoMode={false}
        editTodoMode={false}
        addProject={addProject}
        addProjectModeSwitch={addProjectModeSwitch}
        editProjectModeSwitch={editProjectModeSwitch}
        addTodoModeSwitch={addTodoModeSwitch}
        editTodoModeSwitch={editTodoModeSwitch}
        selectProject={selectProject}
        addNewProject={addNewProject}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('interaction with AddProjectBtn', () => {
    test('it should call addProjectModeSwitch on clicking AddBtn', () => {
      wrapper.find('AddProjectBtn').prop('clickAddProjectBtn')();
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });

    test('it should call editProjectModeSwitch if editProjectMode is on', () => {
      wrapper.setProps({ editProjectMode: true });
      wrapper.find('AddProjectBtn').prop('clickAddProjectBtn')();
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call addTodoModeSwitch if addTodoMode is on', () => {
      wrapper.setProps({ addTodoMode: true });
      wrapper.find('AddProjectBtn').prop('clickAddProjectBtn')();
      expect(addTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call editTodoModeSwitch if editTodoMode is on', () => {
      wrapper.setProps({ editTodoMode: true });
      wrapper.find('AddProjectBtn').prop('clickAddProjectBtn')();
      expect(editTodoModeSwitch).toHaveBeenCalled();
    });
  });

  test('it should handle change in input', () => {
    wrapper.setProps({ addProjectMode: true });
    wrapper.find('ProjectsForm').prop('handleChange')('projectName', 'New');
    expect(wrapper.state('projectName')).toBe('New');
  });

  test('it should handle invalid form submission', () => {
    wrapper.setProps({ addProjectMode: true });
    wrapper.find('ProjectsForm').prop('submitProjectForm')({
      preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
  });

  test('it should handle successful form submission', () => {
    projectsController.create = jest.fn((name, id) => ({ name, id }));
    wrapper.setProps({ addProjectMode: true });
    wrapper.find('ProjectsForm').prop('handleChange')('projectName', 'New Project');
    wrapper.find('ProjectsForm').prop('submitProjectForm')({
      preventDefault: () => {},
    });
    expect(wrapper.state('projectName')).toBe('');
    expect(wrapper.state('error')).toBe('');
    expect(wrapper.state('projectName')).toBe('');
    expect(wrapper.state('error')).toBe('');
    expect(addProjectModeSwitch).toHaveBeenCalled();
    expect(addProject).toHaveBeenLastCalledWith({ name: 'New Project' });
    expect(projectsController.create).toHaveBeenLastCalledWith('New Project', expect.any(String));
    expect(selectProject).toHaveBeenLastCalledWith({ name: 'New Project', id: expect.any(String) });
    expect(addNewProject).toHaveBeenLastCalledWith({ name: 'New Project', id: expect.any(String) });
  });
});
