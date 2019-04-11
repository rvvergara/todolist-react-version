import React from 'react';

// export default (props) => {
//   const {
//     todo
//   } = props;
//   return (
//     <tr>
//       <td>{todo.title}</td>
//       <td>{todo.description}</td>
//       <td>{todo.dueDate}</td>
//       <td>{todo.priority}</td>
//       <td>{todo.notes}</td>
//       <td>
//         <input type="checkbox" value="false" />
//       </td>
//       <td>
//         <button>Update</button>
//         <button>Delete</button>
//       </td>
//     </tr>
//   )
// }

class TodoItem extends React.Component {
  state = {
    done: false,
  }

  tickProject = () => {
    this.setState((prevState) => ({
      done: !prevState.done,
    }))
  }

  render() {
    const {
      todo
    } = this.props;
    const doneClass = this.state.done ? 'strikeout' : '';
    return (
      <tr className={doneClass}>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{todo.dueDate}</td>
        <td>{todo.priority}</td>
        <td>{todo.notes}</td>
        <td>
          <input
          type="checkbox"
          value="false"
          onChange={this.tickProject}
          />
        </td>
        <td>
          <button>Update</button>
          <button>Delete</button>
        </td>
      </tr>
    )
  }
}

export default TodoItem;