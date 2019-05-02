import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from '../../../views/components/ProjectList';
import projects from '../../fixtures/projects';
import * as storage from '../../../controllers/helpers/common/storage';

describe('ProjectList', () => {
  let wrapper;
  let getProjects;
  let selectProject;

  beforeEach(() => {
    getProjects = jest.fn(() => ({ projects }));
    selectProject = jest.fn();
    storage.getDataFromLocalStorage = jest.fn(() => projects);
    wrapper = shallow(
      <ProjectList
        projects={projects}
        selectedProject={projects[0].name}
        getProjects={getProjects}
        selectProject={selectProject}
      />,
    );
  });

  describe('rendering and mounting', () => {
    test('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should call getDataFromLocalStorage', () => {
      expect(storage.getDataFromLocalStorage).toHaveBeenLastCalledWith('projectsArray');
    });

    test('should call getProjects action before mounting', () => {
      expect(getProjects).toHaveBeenLastCalledWith(projects);
    });

    test('should select first project before rendering', () => {
      expect(selectProject).toHaveBeenCalled();
    });

    test('should setState to projects', () => {
      expect(wrapper.state('projects')).toEqual(projects);
    });
  });

  describe('interacting with ProjectItem component', () => {
    test('it should handle delete', () => {
      const project = projects[0];
      wrapper.find('ConnectFunction').at(0).prop('handleDeleteProject')(project.id);
      expect(wrapper.state('projects')).toEqual([projects[1], projects[2]]);
      expect(selectProject).toHaveBeenLastCalledWith(projects[1]);
    });
  });

  describe('interacting with AddNewProject Component', () => {
    test('it should change state when adding new project', () => {
      const newProject = {
        name: 'Cool',
        id: 'aeha-2214',
      };
      wrapper.find('ConnectFunction').at(3).prop('addNewProject')(newProject);
      expect(wrapper.state('projects')).toEqual([...projects, newProject]);
    });
  });
});
