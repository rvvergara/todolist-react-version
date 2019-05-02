import React from 'react';
import { shallow } from 'enzyme';
import AddTodoBtn from '../../../views/components/AddTodoBtn';

describe('AddTodoBtn', () => {
  let wrapper;
  let handleTodoBtn;

  beforeEach(() => {
    handleTodoBtn = jest.fn();
    wrapper = shallow(
      <AddTodoBtn
        handleTodoBtn={handleTodoBtn}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call handleTodoBtn upon button click', () => {
    wrapper.find('button').simulate('click');
    expect(handleTodoBtn).toHaveBeenCalled();
  });
});
