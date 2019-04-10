import React from 'react';

export default (props) => {
  const {
    todo
  } = props;
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.priority}</td>
      <td>{todo.note}</td>
      <td>{todo.status}</td>
      <td>
        <button>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}