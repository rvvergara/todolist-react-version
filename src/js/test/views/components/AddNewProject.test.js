import React from 'react';
import { shallow } from 'enzyme';
import { AddNewProject } from '../../../views/components/AddNewProject';
import projects from '../../fixtures/projects';

// const projectsController = jest.mock('../../../controllers/projectsController.js');

describe('AddNewProject', () => {
  let wrapper;
  let addProject;

  beforeEach(() => {
    addProject = jest.fn(({ name }) => ({
      type: 'ADD_PROJECT',
      project: {
        name,
        description: '',
      },
    }));
    wrapper = shallow(
      <AddNewProject
        projects={projects}
        addProject={addProject}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should change addProjectMode state on clicking AddBtn', () => {
    wrapper.find('AddProjectBtn').prop('clickAddProjectBtn')();
    expect(wrapper.state('addProjectMode')).toBe(true);
  });

  test('it should handle change in input', () => {
    wrapper.find('ProjectsForm').prop('handleChange')('projectName', 'New');
    expect(wrapper.state('projectName')).toBe('New');
  });

  test('it should handle invalid form submission', () => {
    wrapper.find('ProjectsForm').prop('submitProjectForm')({
      preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
  });

  test('it should handle successful form submission', () => {
    wrapper.find('ProjectsForm').prop('handleChange')('projectName', 'New Project');
    wrapper.find('ProjectsForm').prop('submitProjectForm')({
      preventDefault: () => {},
    });
    expect(wrapper.state('addProjectMode')).toBe(false);
    expect(wrapper.state('projectName')).toBe('');
    expect(wrapper.state('error')).toBe('');
    expect(addProject).toHaveBeenLastCalledWith({ name: 'New Project' });
  });
});
