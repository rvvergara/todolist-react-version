import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from '../../../views/components/ProjectList';
import projects from '../../fixtures/projects';
import * as storage from '../../../controllers/helpers/common/storage';

describe('ProjectList', () => {
  let wrapper;
  let getProjects;
  let addProject;
  let selectProject;

  beforeEach(() => {
    getProjects = jest.fn(() => []);
    addProject = jest.fn();
    selectProject = jest.fn();
    storage.getDataFromLocalStorage = jest.fn(() => projects);
    wrapper = shallow(
      <ProjectList
        projects={projects}
        selectedProject={projects[0].name}
        getProjects={getProjects}
        addProject={addProject}
        selectProject={selectProject}
      />,
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call getProjects action before mounting', () => {
    expect(getProjects).toHaveBeenLastCalledWith(projects);
  });

  test('should select first project before rendering', () => {
    expect(selectProject).toHaveBeenCalled();
  });
});
