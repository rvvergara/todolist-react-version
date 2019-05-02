import React from 'react';
import { shallow } from 'enzyme';
import { AddNewProject } from '../../../views/components/AddNewProject';
import projects from '../../fixtures/projects';

describe('AddNewProject', () => {
  let wrapper;
  let addProject;
  let addProjectModeSwitch;
  let editProjectModeSwitch;
  let selectProject;
  let addNewProject;

  beforeEach(() => {
    addProject = jest.fn(({ name }) => ({
      type: 'ADD_PROJECT',
      project: {
        name,
        description: '',
      },
    }));
    addProjectModeSwitch = jest.fn();
    editProjectModeSwitch = jest.fn();
    selectProject = jest.fn();
    addNewProject = jest.fn();
    wrapper = shallow(
      <AddNewProject
        projects={projects}
        addProjectMode={false}
        editProjectMode={false}
        addProject={addProject}
        addProjectModeSwitch={addProjectModeSwitch}
        editProjectModeSwitch={editProjectModeSwitch}
        selectProject={selectProject}
        addNewProject={addNewProject}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call addProjectModeSwitch on clicking AddBtn', () => {
    wrapper.find('AddProjectBtn').prop('clickAddProjectBtn')();
    expect(addProjectModeSwitch).toHaveBeenCalled();
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
    wrapper.setProps({ addProjectMode: true });
    wrapper.find('ProjectsForm').prop('handleChange')('projectName', 'New Project');
    wrapper.find('ProjectsForm').prop('submitProjectForm')({
      preventDefault: () => {},
    });
    expect(wrapper.state('addProjectMode')).toBe(false);
    expect(wrapper.state('projectName')).toBe('');
    expect(wrapper.state('error')).toBe('');
    expect(addProject).toHaveBeenLastCalledWith({ name: 'New Project' });
    expect(selectProject).toHaveBeenLastCalledWith({ name: 'New Project', description: '' });
  });
});
