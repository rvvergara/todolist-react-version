import React from 'react';
import { mount } from 'enzyme';
import { ProjectItem } from '../../../views/components/ProjectItem';
import projects from '../../fixtures/projects';

describe('ProjectItem', () => {
  let wrapper;
  let addProjectModeSwitch;
  let editProjectModeSwitch;
  let selectProject;

  beforeEach(() => {
    addProjectModeSwitch = jest.fn();
    editProjectModeSwitch = jest.fn();
    selectProject = jest.fn();
    wrapper = mount(
      <ProjectItem
        project={projects[0]}
        addProjectMode={false}
        editProjectMode={false}
        addProjectModeSwitch={addProjectModeSwitch}
        editProjectModeSwitch={editProjectModeSwitch}
        selectProject={selectProject}
      />,
    );
  });
  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should switch on editProject mode', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(selectProject).toHaveBeenLastCalledWith(projects[0].name);
  });

  test('should switch on editProject mode', () => {
    wrapper.find('button');
  });
});
