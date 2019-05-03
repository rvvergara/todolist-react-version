import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import TodosForm from '../../../views/components/TodosForm';
import todos from '../../fixtures/todos';

describe('TodosForm', () => {
  let wrapper;
  let handleSubmit;
  let changeOnInput;
  let formSubmit;

  beforeEach(() => {
    handleSubmit = jest.fn();
    wrapper = shallow(
      <TodosForm
        handleSubmit={handleSubmit}
      />,
    );
    changeOnInput = (input, value) => wrapper.find(input).simulate('change', {
      target: { value },
    });
    formSubmit = () => wrapper.find('form').prop('onSubmit')({
      preventDefault: () => {},
    });
  });

  describe('rendering', () => {
    test('should render without todo', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render with todo', () => {
      const initialState = {
        ...todos[2],
        dueDate: moment(todos[2].dueDate),
        priority: todos[2].priority,
        error: '',
        calendarFocused: false,
        id: undefined,
      };
      wrapper = shallow(
        <TodosForm
          handleSubmit={handleSubmit}
          todo={todos[2]}
        />,
      );
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.state()).toEqual(initialState);
    });
  });

  describe('handling changes in title, description, priority, and notes', () => {
    test('should handle change in title input', () => {
      const value = 'Cool Title';
      changeOnInput('input[placeholder="Title"]', value);
      expect(wrapper.state('title')).toBe(value);
    });

    test('should handle change in description input', () => {
      const value = 'Cillum ut est aute ipsum tempor aliqua laborum culpa aliqua quis.';
      changeOnInput('input[placeholder="Description"]', value);
      expect(wrapper.state('description')).toBe(value);
    });

    test('should handle change in priority', () => {
      const value = 'High';
      changeOnInput('select', value);
      expect(wrapper.state('priority')).toBe(value);
    });

    test('should handle change in notes value', () => {
      const value = 'Velit anim magna esse pariatur pariatur excepteur qui veniam ex consectetur aute Lorem.';
      changeOnInput('input[placeholder="Notes"]', value);
      expect(wrapper.state('notes')).toBe(value);
    });
  });

  describe('interaction with SingleDatePicker', () => {
    test('should set date on date change', () => {
      const anotherDeadline = moment().add(10, 'days');
      wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(anotherDeadline);
      expect(wrapper.state('dueDate')).toBe(anotherDeadline);
    });

    test('should set calendar focus on change', () => {
      wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true });
      expect(wrapper.state('calendarFocused')).toBe(true);
    });
  });

  describe('form submission', () => {
    test('should handle invalid form submission', () => {
      formSubmit();
      expect(wrapper.state('error').length).toBeGreaterThan(0);
    });

    test('should handle successful form submission', () => {
      const value = 'Valid Title';
      changeOnInput('input[placeholder="Title"]', value);
      formSubmit();
      expect(wrapper.state('error').length).toBe(0);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
