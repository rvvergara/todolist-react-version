import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { Todos } from '../../../views/components/Todos';
import projects from '../../fixtures/projects';
import todos from '../../fixtures/todos';
import todosController from '../../../controllers/todosController';
import * as storage from '../../../controllers/helpers/common/storage';

describe('Todos', () => {
  let wrapper;
  let addProjectModeSwitch;
  let addTodo;
  let addTodoModeSwitch;
  let deleteTodo;
  let editProjectModeSwitch;
  let editTodoModeSwitch;
  let getTodos;
  let allTodos;

  beforeEach(() => {
    todosController.create = jest.fn();
    addProjectModeSwitch = jest.fn();
    addTodo = jest.fn(() => ({ todo: {} }));
    addTodoModeSwitch = jest.fn();
    deleteTodo = jest.fn();
    editProjectModeSwitch = jest.fn();
    editTodoModeSwitch = jest.fn();
    getTodos = jest.fn();
    wrapper = shallow(
      <Todos
        addProjectModeSwitch={addProjectModeSwitch}
        addTodoModeSwitch={addTodoModeSwitch}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        editProjectModeSwitch={editProjectModeSwitch}
        editTodoModeSwitch={editTodoModeSwitch}
        getTodos={getTodos}
        todos={todos}
        shownTodos={[todos[0]]}
        selectedProject={projects[0]}
        addTodoMode={false}
        editTodoMode={false}
        addProjectMode={false}
        editProjectMode={false}
      />,
    );
    storage.getDataFromLocalStorage = jest.fn(() => todos);
    allTodos = storage.getDataFromLocalStorage('someName');
  });

  describe('rendering and mounting', () => {
    test('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should get data from database/storage and call getTodos prior to mounting', () => {
      expect(storage.getDataFromLocalStorage).toHaveBeenLastCalledWith(expect.any(String));
      expect(getTodos).toHaveBeenLastCalledWith(allTodos);
    });
  });

  describe('should handle interaction with the AddTodoBtn component', () => {
    test('it should call addTodoModeSwitch and render TodosForm and not show AddTodo button', () => {
      wrapper.find('AddTodoBtn').prop('handleTodoBtn')();
      expect(addTodoModeSwitch).toHaveBeenCalled();
      wrapper.setProps({ addTodoMode: true });
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('TodosForm')).toBeTruthy();
      expect(wrapper.find('AddTodoBtn')).toEqual({});
    });

    test('it should call addProjectModeSwitch if addProjectMode is true initially', () => {
      wrapper.setProps({ addProjectMode: true });
      wrapper.find('AddTodoBtn').prop('handleTodoBtn')();
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });

    test('it should call editProjectModeSwitch if editProject mode is initially true', () => {
      wrapper.setProps({ editProjectMode: true });
      wrapper.find('AddTodoBtn').prop('handleTodoBtn')();
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });
  });

  describe('should handle form submission', () => {
    beforeEach(() => {
      wrapper.setProps({ addTodoMode: true });
      wrapper.find('TodosForm').prop('handleSubmit')({});
    });

    test('it should call addTodo', () => {
      expect(addTodo).toHaveBeenLastCalledWith({}, projects[0].id);
    });

    test('it should call todosController.create method', () => {
      expect(todosController.create).toHaveBeenLastCalledWith({});
    });

    test('it should call addToDoModeSwitch', () => {
      expect(addTodoModeSwitch).toHaveBeenCalled();
    });
  });

  describe('should handle deleteTodo', () => {
    test('it should call deleteTodo with the id of the todo to be deleted', () => {
      wrapper.find('ConnectFunction').prop('deleteTodo')(todos[0].id);
      expect(deleteTodo).toHaveBeenLastCalledWith(todos[0].id);
    });

    test('it should call addTodoModeSwitch if addTodoMode is initially true', () => {
      wrapper.setProps({ addTodoMode: true });
      wrapper.find('ConnectFunction').prop('deleteTodo')(todos[0].id);
      expect(addTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call editTodoModeSwitch if editTodoMode is initially true', () => {
      wrapper.setProps({ editTodoMode: true });
      wrapper.find('ConnectFunction').prop('deleteTodo')(todos[0].id);
      expect(editTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call addProjectModeSwitch if addProjectMode is initially true', () => {
      wrapper.setProps({ addProjectMode: true });
      wrapper.find('ConnectFunction').prop('deleteTodo')(todos[0].id);
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call editProjectModeSwitch if editProjectMode is initially true', () => {
      wrapper.setProps({ editProjectMode: true });
      wrapper.find('ConnectFunction').prop('deleteTodo')(todos[0].id);
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });
  });
});
