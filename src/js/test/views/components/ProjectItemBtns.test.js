import React from 'react';
import { shallow } from 'enzyme';
import ProjectItemBtns from '../../../views/components/ProjectItemBtns';
import projects from '../../fixtures/projects';

let wrapper;
let project;
let handleDeleteProject;
let clickUpdateProjectBtn;

beforeEach(() => {
  project = projects[0];
  handleDeleteProject = jest.fn();
  clickUpdateProjectBtn = jest.fn();
  wrapper = shallow(
    <ProjectItemBtns
      project={project}
      handleDeleteProject={handleDeleteProject}
      clickUpdateProjectBtn={clickUpdateProjectBtn}
    />,
  );
});

test('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('clickUpdateProjectBtn should be called on click to Update btn', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(clickUpdateProjectBtn).toHaveBeenCalled();
});

test('handleDelete should be called on click to Delete btn', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(handleDeleteProject).toHaveBeenCalled();
});
