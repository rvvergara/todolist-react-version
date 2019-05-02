import React from 'react';
import { shallow } from 'enzyme';
import ProjectsForm from '../../../views/components/ProjectsForm';
import projects from '../../fixtures/projects';

describe('ProjectsForm', () => {
  let handleChange;
  let submitProjectForm;
  let wrapper;

  beforeEach(() => {
    handleChange = jest.fn((k, v) => ({ [k]: v }));
    submitProjectForm = jest.fn();
    wrapper = shallow(
      <ProjectsForm
        handleChange={handleChange}
        submitProjectForm={submitProjectForm}
        name=""
        error=""
      />,
    );
  });

  test('it should render correctly without name and error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should render correctly with name', () => {
    wrapper.setProps({ name: 'Another Project' });
    expect(wrapper).toMatchSnapshot();
  });

  test('it should render correctly with error', () => {
    wrapper.setProps({ error: 'You missed something' });
    expect(wrapper).toMatchSnapshot();
  });

  describe('input change and form submission', () => {
    let name;
    let value;
    beforeEach(() => {
      name = 'projectName';
      value = 'Make a change';
      wrapper.find('input').prop('onChange')({
        target: { name, value },
      });
    });
    test('it should handleChange in project name input', () => {
      expect(handleChange).toHaveBeenLastCalledWith(name, value);
    });

    test('it should handle form submission', () => {
      wrapper.find('form').simulate('submit');
      expect(submitProjectForm).toHaveBeenCalled();
    });
  });
});
