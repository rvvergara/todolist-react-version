import React from 'react';
import { shallow } from 'enzyme';
import { ProjectItem } from '../../../views/components/ProjectItem';
import projectsController from '../../../controllers/projectsController';
import projects from '../../fixtures/projects';

describe('ProjectItem', () => {
  let wrapper;
  let addProjectModeSwitch;
  let addTodoModeSwitch;
  let deleteProject;
  // let deleteTodo;
  let deleteAllTodos;
  let editTodoModeSwitch;
  let editProjectModeSwitch;
  let handleDeleteProject;
  let selectProject;
  let setProjectForEdit;
  let updateProject;

  beforeEach(() => {
    addProjectModeSwitch = jest.fn();
    addTodoModeSwitch = jest.fn();
    deleteProject = jest.fn();
    deleteAllTodos = jest.fn();
    editProjectModeSwitch = jest.fn();
    editTodoModeSwitch = jest.fn();
    handleDeleteProject = jest.fn();
    selectProject = jest.fn();
    setProjectForEdit = jest.fn();
    updateProject = jest.fn();
    wrapper = shallow(
      <ProjectItem
        project={projects[0]}
        addProjectMode={false}
        addTodoMode={false}
        addTodoModeSwitch={addTodoModeSwitch}
        deleteAllTodos={deleteAllTodos}
        editProjectMode={false}
        editTodoMode={false}
        editTodoModeSwitch={editTodoModeSwitch}
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
    test('should call editProjectModeSwitch', () => {
      wrapper.find('ProjectItemBtns').prop('clickUpdateProjectBtn')({
        stopPropagation: () => {},
      });
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call setProjectForEdit', () => {
      wrapper.find('ProjectItemBtns').prop('clickUpdateProjectBtn')({
        stopPropagation: () => {},
      });
      expect(setProjectForEdit).toHaveBeenLastCalledWith(projects[0].id);
    });

    test('should call addProjectModeSwitch if addProjectMode is true', () => {
      wrapper.setProps({ addProjectMode: true });
      wrapper.find('ProjectItemBtns').prop('clickUpdateProjectBtn')({
        stopPropagation: () => {},
      });
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call addTodoModeSwitch if addTodoMode is true', () => {
      wrapper.setProps({ addTodoMode: true });
      wrapper.find('ProjectItemBtns').prop('clickUpdateProjectBtn')({
        stopPropagation: () => {},
      });
      expect(addTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call editTodoModeSwitch if editTodoMode is true', () => {
      wrapper.setProps({ editTodoMode: true });
      wrapper.find('ProjectItemBtns').prop('clickUpdateProjectBtn')({
        stopPropagation: () => {},
      });
      expect(editTodoModeSwitch).toHaveBeenCalled();
    });
  });


  describe('interaction with ProjectItemBtns handleDeleteProject', () => {
    beforeEach(() => {
      projectsController.delete = jest.fn();
    });

    test('should call on deleProject and projectsController.delete', () => {
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(deleteProject).toHaveBeenLastCalledWith(projects[0].id);
    });

    test('should call on projectController.delete action', () => {
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(projectsController.delete).toHaveBeenLastCalledWith(projects[0].id);
    });

    test('should call on deleteAllTodo', () => {
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(deleteAllTodos).toHaveBeenCalled();
    });

    test('should call addProjectModeSwitch if addProjectMode is true', () => {
      wrapper.setProps({ addProjectMode: true });
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call editProjectModeSwitch if editProjectMode is true', () => {
      wrapper.setProps({ editProjectMode: true });
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call adddTodoModeSwitch if addTodoMode is true', () => {
      wrapper.setProps({ addTodoMode: true });
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(addTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call editTodoModeSwitch if editTodoMode is true', () => {
      wrapper.setProps({ editTodoMode: true });
      wrapper.find('ProjectItemBtns').prop('handleDeleteProject')();
      expect(editTodoModeSwitch).toHaveBeenCalled();
    });
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
      expect(selectProject).toHaveBeenLastCalledWith({ ...projects[0], name });
    });
  });
});
