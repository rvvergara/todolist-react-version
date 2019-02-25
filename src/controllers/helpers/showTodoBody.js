import todosController from "../todosController";

import {
  showTodoForm
} from './generalHelpers';

export const showTodoBody = (name) => {
  // Create the parent div 
  let project = JSON.parse(localStorage.getItem(name));
  let todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = "";
  // Create the table if there is already a todo in the project
  if (project === null || project.todos.length === 0) {
    createEmptyTodoMsg(name);
  } else {
    // Remove class d-none for table
    document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
    // Iterate thru each todo and create tr for them
    project.todos.forEach(todo => {
      createTodoRow(todoBody, todo, project);
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

const createTodoRow = (todoBody, todo, project) => {
  let tr = document.createElement("tr");
  tr.setAttribute("id", todo.id);
  if (todo.done) tr.setAttribute("class", "strikeout");
  let todoDeleteBtn = createTodoDeleteBtn();
  let btnTd = document.createElement("td");
  let todoUpdateBtn = createTodoUpdateBtn(todo.id);
  btnTd.appendChild(todoUpdateBtn);
  btnTd.appendChild(todoDeleteBtn);
  createTodoTd(tr, todo.title);
  createTodoTd(tr, todo.description);
  createTodoTd(tr, todo.dueDate);
  createTodoTd(tr, todo.priority);
  createTodoTd(tr, todo.notes);
  createTodoTd(tr, todo.done, todo, project);
  tr.appendChild(btnTd);

  todoBody.appendChild(tr);
};

const createTodoTd = (tr, todoProp, todo, project) => {


  let td = document.createElement("td");
  if (typeof todoProp === "boolean") {
    let inputDone = document.createElement("input");
    inputDone.setAttribute("type", "checkbox");
    if (todo.done) inputDone.setAttribute("checked", true);
    inputDone.setAttribute("value", todoProp);
    inputDone.addEventListener("change", e => {
      e.stopPropagation();
      e.target.parentNode.parentNode.setAttribute("class", "strikeout");
      todo.done = !todo.done;

      let todoStatus = todo.done;
      e.target.setAttribute("value", todoStatus);
      let index = project.todos.findIndex(x => x.id === todo.id);
      project.todos.splice(index, 1, todo);
      localStorage.setItem(project.name, JSON.stringify(project));

    });
    td.appendChild(inputDone);
  } else {
    td.innerText = todoProp;
  }
  tr.appendChild(td);
}

const createTodoUpdateBtn = (id) => {
  let todoUpdateBtn = document.createElement("button");
  todoUpdateBtn.setAttribute("class", "btn btn-sm btn-warning mx-1 updateTodo");
  todoUpdateBtn.setAttribute("id", id);
  todoUpdateBtn.innerText = "Update";
  addUpdateListenerToBtn(todoUpdateBtn);
  return todoUpdateBtn;
}

const createTodoDeleteBtn = () => {
  let todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.setAttribute("class", "btn btn-sm btn-danger mx-1 deleteTodo");
  todoDeleteBtn.innerText = "Delete";
  addDeleteListenerToBtn(todoDeleteBtn);
  return todoDeleteBtn;
}

const addUpdateListenerToBtn = btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    let tr = e.target.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
    let dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id"));
    let projectName = JSON.parse(localStorage["projectsArray"]).find(x => x.id === dataID).name;
    let todoId = e.target.getAttribute("id");
    let project = JSON.parse(localStorage[projectName]);
    let action = "updateTodo";
    showTodoForm(project, action, todoId);

    // Pre-fill up form with current values
    let todo = project.todos.find(x => x.id == todoId);
    let todoIndex = project.todos.findIndex(x => x.id == todoId);
    let inputs = document.getElementsByClassName("todo-form");
    let currentDueDate = new Date(todo.dueDate);
    inputs[0].value = todo.title;
    inputs[1].value = todo.description;
    inputs[2].value = `${currentDueDate.getFullYear()}-0${currentDueDate.getMonth() + 1}-${currentDueDate.getDate()}`;
    document.getElementsByTagName("select")[0].value = todo.priority;
    inputs[3].value = todo.notes;
  });
};

const addDeleteListenerToBtn = btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    let dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id"));
    let project = JSON.parse(localStorage["projectsArray"]).find(x => x.id === dataID);
    let todoId = e.target.parentNode.parentNode.getAttribute("id");
    todosController.delete(project.name, todoId);
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
  });
}