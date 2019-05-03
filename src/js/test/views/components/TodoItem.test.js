import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from '../../../views/components/TodoItem';
import todosController from '../../../controllers/todosController';
import projects from '../../fixtures/projects';
import todos from '../../fixtures/todos';

describe('TodoItem', () => {
  let wrapper;
  let initialState;
  let deleteTodo;
  let addProjectModeSwitch;
  let addTodoModeSwitch;
  let editProjectModeSwitch;
  let editTodoModeSwitch;
  let setTodoForEdit;
  let updateTodo;
  let updateBtnClick;
  let setWrapperProps;

  beforeEach(() => {
    deleteTodo = jest.fn();
    addProjectModeSwitch = jest.fn();
    addTodoModeSwitch = jest.fn();
    editProjectModeSwitch = jest.fn();
    editTodoModeSwitch = jest.fn();
    setTodoForEdit = jest.fn();
    updateTodo = jest.fn();
    todosController.update = jest.fn();
    updateBtnClick = () => wrapper.find('button').at(0).prop('onClick')({
      stopPropagation: () => {},
    });
    setWrapperProps = (key, val) => wrapper.setProps({ [key]: val });
    initialState = {
      todo: todos[1],
      done: todos[1].done,
      title: todos[1].title,
      description: todos[1].description,
      dueDate: todos[1].dueDate,
      priority: todos[1].priority,
      notes: todos[1].notes,
    };
    wrapper = shallow(
      <TodoItem
        deleteTodo={deleteTodo}
        addProjectModeSwitch={addProjectModeSwitch}
        addTodoModeSwitch={addTodoModeSwitch}
        editProjectModeSwitch={editProjectModeSwitch}
        editTodoModeSwitch={editTodoModeSwitch}
        setTodoForEdit={setTodoForEdit}
        updateTodo={updateTodo}
        selectedProject={projects[1]}
        addTodoMode={false}
        editTodoMode={false}
        todoBeingEdited={undefined}
        addProjectMode={false}
        editProjectMode={false}
        todo={todos[1]}
      />,
    );
  });

  test('should render correctly and have correct initial state', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state()).toEqual(initialState);
  });

  describe('ticking checkbox', () => {
    beforeEach(() => {
      wrapper.find('input[type="checkbox"]').simulate('change');
    });

    test('should call todosContoller update method', () => {
      expect(todosController.update).toHaveBeenLastCalledWith(todos[1].id, { done: !initialState.done });
    });

    test('should call updateTodo with todo.id and an object containing updated done and todo title', () => {
      expect(updateTodo).toHaveBeenLastCalledWith(todos[1].id, { title: todos[1].title, done: !todos[1].done });
    });

    test('should change state', () => {
      expect(wrapper.state('todo')).toEqual({ ...todos[1], done: !todos[1].done });
      expect(wrapper.state('done')).toBe(!todos[1].done);
    });

    test('should disable buttons', () => {
      [0, 1].forEach(index => expect(wrapper.find('button').at(index).prop('disabled')).toBe(true));
    });
  });

  describe('interacting with Update button', () => {
    test('should call editToModeSwitch if editToMode is initially false', () => {
      updateBtnClick();
      expect(editTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call setTodoForEdit with the todo id', () => {
      updateBtnClick();
      expect(setTodoForEdit).toHaveBeenLastCalledWith(todos[1].id);
    });

    test('should call addTodoMOdeSwitch if addTodoMode is initially true', () => {
      setWrapperProps('addTodoMode', true);
      updateBtnClick();
      expect(addTodoModeSwitch).toHaveBeenCalled();
    });

    test('should call addProjectModeSwitch if addProjectMode is initially true', () => {
      setWrapperProps('addProjectMode', true);
      updateBtnClick();
      expect(addProjectModeSwitch).toHaveBeenCalled();
    });

    test('should call editProjectModeSwitch if editProjectMode is initially true', () => {
      setWrapperProps('editProjectMode', true);
      updateBtnClick();
      expect(editProjectModeSwitch).toHaveBeenCalled();
    });

    test('it should call setTodoForEdit with the todo id', () => {
      updateBtnClick();
      expect(setTodoForEdit).toHaveBeenLastCalledWith(todos[1].id);
    });
  });
});
