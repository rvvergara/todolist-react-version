import React from 'react';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodosForm from './TodosForm';

export default (props) => {
  const {
    selectedProject,
    handleTodoBtn,
    submitTodo,
    addOrEditTodo,
  } = props;
  return (
    <div>
      <h2>
        Todo list for&nbsp;
        {selectedProject.name}
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
            selectedProject.todos.map((todo, i) => <TodoItem todo={todo} key={`todo-${i}`} />)
          }
        </tbody>
      </table>
      {
        selectedProject.todos.length === 0 && <div>No todos yet</div>
      }
      <AddTodoBtn
      handleTodoBtn={handleTodoBtn}
      addOrEditTodo={addOrEditTodo}
      />
      <TodosForm
      addOrEditTodo={addOrEditTodo}
      submitTodo={submitTodo}
      />
    </div>
  );
};
