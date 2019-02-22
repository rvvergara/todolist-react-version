export const showTodoBody = (name) => {
  // Create the parent div 
  let project = JSON.parse(localStorage.getItem(name));
  let todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = "";
  // Create the table if there is already a todo in the project
  if (project.todos.length === 0) {
    createEmptyTodoMsg(name);
  } else {
    // Remove class d-none for table
    document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
    // Iterate thru each todo and create tr for them
    project.todos.forEach(todo => {
      createTodoRow(todoBody, todo);
    });
  }
};

const createEmptyTodoMsg = name => {
  let emptyTodoMessage = document.createElement("p");
  emptyTodoMessage.setAttribute("class", "emptyTodoMessage")
  emptyTodoMessage.innerText = `No todo items for ${name} yet`;
  document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
  document.getElementById("todoBody").appendChild(emptyTodoMessage);
};

const createTodoRow = (todoBody, todo) => {
  let tr = document.createElement("tr");
  let todoDeleteBtn = createTodoDeleteBtn();
  let btnTd = document.createElement("td");
  btnTd.appendChild(todoDeleteBtn);
  tr.setAttribute("id", todo.id);
  createTodoTd(tr, todo.title);
  createTodoTd(tr, todo.description);
  createTodoTd(tr, todo.dueDate);
  createTodoTd(tr, todo.priority);
  createTodoTd(tr, todo.notes);
  tr.appendChild(btnTd);

  todoBody.appendChild(tr);
};

const createTodoTd = (tr, todoProp) => {
  let td = document.createElement("td");
  td.innerText = todoProp;
  tr.appendChild(td);
}

const createTodoDeleteBtn = () => {
  let todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.setAttribute("class", "btn btn-sm btn-danger mt-1 deleteTodo");
  todoDeleteBtn.innerText = "Delete";
  return todoDeleteBtn;
}