import React from 'react';
import { shallow } from 'enzyme';
import TodoListApp from '../../../views/components/TodoListApp.js';

test('TodoListApp should render correctly', () => {
  expect(shallow(<TodoListApp />)).toMatchSnapshot();
});
