import React from 'react';
import { shallow } from 'enzyme';
import { ProjectItem } from '../../../views/components/ProjectItem';
import projectsController from '../../../controllers/projectsController';
import projects from '../../fixtures/projects';

describe('ProjectItem', () => {
  let wrapper;
  let addProjectModeSwitch;
  let editProjectModeSwitch;
  let selectProject;
  let deleteProject;
  let handleDeleteProject;
  let updateProject;
  let setProjectForEdit;

  beforeEach(() => {
    addProjectModeSwitch = jest.fn();
    editProjectModeSwitch = jest.fn();
    selectProject = jest.fn();
    deleteProject = jest.fn();
    handleDeleteProject = jest.fn();
    updateProject = jest.fn();
    setProjectForEdit = jest.fn();
    wrapper = shallow(
      <ProjectItem
        project={projects[0]}
        addProjectMode
        editProjectMode={false}
        addProjectModeSwitch={addProjectModeSwitch}
        editProjectModeSwitch={editProjectModeSwitch}
        selectProject={selectProject}
        deleteProject={deleteProject}
        setProjectForEdit={setProjectForEdit}
        projectBeingEdited={undefined}
        updateProject={updateProject}
        handleDeleteProject={handleDeleteProject}
        projectTodos={[]}
      />,
    );
  });
  test('it should render correctly without projectsForm', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call selectProject upon click', () => {
    wrapper.find('div').at(0).simulate('click');
    expect(selectProject).toHaveBeenLastCalledWith(projects[0]);
  });

  describe('interacting with ProjectItemBtns clickUpdateProjectBtn', () => {
    beforeEach(() => {
      wrapper.find('ProjectItemBtns').prop('clickUpdateProjectBtn')({
        stopPropagation: () => {},
      });
    });
    test('should call setProjectForEdit', () => {
      expect(setProjectForEdit).toHaveBeenLastCalledWith(projects[0].id);
    });
    test('should call editProjectModeSwitch', () => {
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });
    test('should call addProjectModeSwitch if adProjectMode is true', () => {
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });
  });

  test('should call on deleProject and projectsController.delete', () => {
    projectsController.delete = jest.fn();
    wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
    expect(deleteProject).toHaveBeenLastCalledWith(projects[0].id);
    expect(projectsController.delete).toHaveBeenLastCalledWith(projects[0].id);
  });

  describe('interaction with ProjectsForm', () => {
    beforeEach(() => {
      wrapper.setProps({ editProjectMode: true, addProjectMode: false, projectBeingEdited: projects[0].id });
    });
    test('it should render with ProjectsForm', () => {
      expect(wrapper).toMatchSnapshot();
    });
    test('it should handle change in project name input', () => {
      wrapper.find('ProjectsForm').prop('handleChange')('projectName', 'My Project');
      expect(wrapper.state('projectName')).toBe('My Project');
    });
    test('should handle project updating', () => {
      const name = 'Cool Project';
      projectsController.update = jest.fn();
      wrapper.find('ProjectsForm').prop('handleChange')('projectName', name);
      wrapper.find('ProjectsForm').prop('submitProjectForm')({
        preventDefault: () => {},
        target: { reset: () => {} },
      });
      expect(updateProject).toHaveBeenLastCalledWith(projects[0].id, { name });
      expect(projectsController.update).toHaveBeenLastCalledWith(projects[0].id, { name });
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });
  });
});
