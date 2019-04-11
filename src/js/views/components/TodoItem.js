import React from 'react';

export default (props) => {
  const {
    todo
  } = props;
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.dueDate}</td>
      <td>{todo.priority}</td>
      <td>{todo.notes}</td>
      <td>
        <input type="checkbox" value="false" />
      </td>
      <td>
        <button>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}