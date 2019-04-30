import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from '../../../views/components/ProjectList';
import projects from '../../fixtures/projects';

describe('ProjectList', () => {
  let wrapper;
  let getProjects;
  let addProject;
  let selectProject;

  beforeEach(() => {
    getProjects = jest.fn();
    addProject = jest.fn();
    selectProject = jest.fn();
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
});
