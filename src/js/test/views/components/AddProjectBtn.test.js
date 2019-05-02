import React from 'react';
import { shallow } from 'enzyme';
import AddProjectBtn from '../../../views/components/AddProjectBtn';

describe('AddProjectBtn', () => {
  let wrapper;
  let clickAddProjectBtn;

  beforeEach(() => {
    clickAddProjectBtn = jest.fn();

    wrapper = shallow(
      <AddProjectBtn
        addProjectMode={false}
        clickAddProjectBtn={clickAddProjectBtn}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call clickAddProjectBtn when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(clickAddProjectBtn).toHaveBeenCalled();
  });
});
