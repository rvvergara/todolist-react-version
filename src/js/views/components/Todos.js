import React from 'react';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodosForm from './TodosForm';
class Todos extends React.Component {
  state = {
    todos: [],
    project: undefined,
    addOrEditTodo: false,
  }
  
  componentWillMount(){
    this.setState((prevState, props) => ({
      project: props.selectedProject,
    }));
    this.setState((prevState, props) => ({
      todos: prevState.project.todos,
    }));
  }

  handleTodoBtn = () => {
    this.setState(() => ({
      addOrEditTodo: true,
    }));
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.setState(() => ({
      addOrEditTodo: false,
    }))
    e.target.reset();
  }

  render() {
    return (
      <div>
          <h2>
          Todo list for&nbsp;
          {this.state.project.name}
        </h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Note</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map((todo, i) => <TodoItem todo={todo} key={`todo-${i}`} />)
            }
          </tbody>
        </table>
        {
          this.state.todos.length === 0 && <div>No todos yet</div>
        }
        <AddTodoBtn
        handleTodoBtn={this.handleTodoBtn}
        addOrEditTodo={this.state.addOrEditTodo}
        />
        <TodosForm
        addOrEditTodo={this.state.addOrEditTodo}
        submitTodo={this.submitTodo}
        />
      </div>
    )
  }
}

export default Todos;