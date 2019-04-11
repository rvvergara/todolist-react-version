import React from 'react';
import TodosForm from './TodosForm';
class TodoItem extends React.Component {
  state = {
    done: false,
    editTodoMode: false,
  }

  tickProject = () => {
    this.setState((prevState) => ({
      done: !prevState.done,
    }))
  }

  clickUpdateBtn = () => {
    this.setState(() => ({
      editTodoMode: true,
    }));
  }

  render() {
    const {
      todo
    } = this.props;
    const doneClass = this.state.done ? 'strikeout' : '';
    const regular = (
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
          <button
            onClick={this.clickUpdateBtn}
          >
            Update
          </button>
          <button>Delete</button>
        </td>
      </tr>
    );
    const editOutput = (
      <tr>
        <td colSpan="6">
          <TodosForm
          editTodoMode={this.state.editTodoMode}
          title={todo.title}
          description={todo.description}
          dueDate={todo.dueDate}
          priority={todo.priority}
          notes={todo.notes}
          />
        </td>
      </tr>
      
    )
    return this.state.editTodoMode ? editOutput : regular; 
  }
}

export default TodoItem;