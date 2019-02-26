import todosController from "../../todosController";

import {
  showTodoForm
} from './todoHelpers';

export const showTodoBody = (name) => {
  // Extract project from localstorage 
  let project = extractProject(name);
  // Select tablebody where we append the respective todos
  let todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = "";
  // If there is no project yet or no todo yet for a project, just show a message
  if (project === null || project.todos.length === 0) {
    createEmptyTodoMsg(name);
  } else {
    //Else make the table appear and create the necessary rows
    document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
    // Iterate thru each todo and create tr for them
    project.todos.forEach(todo => {
      createTodoRow(todoBody, todo, project);
    });
  }
};

// Get project name from  localstorage projectsArray
export const extractProjectName = dataID => {
  return JSON.parse(localStorage["projectsArray"]).find(x => x.id === dataID).name;
};

// Get project from localstorage
export const extractProject = name => {
  return JSON.parse(localStorage[name]);
};

// Empty message to show if there is no todo yet in a project
const createEmptyTodoMsg = name => {
  let emptyTodoMessage = document.createElement("p");
  emptyTodoMessage.setAttribute("class", "emptyTodoMessage")
  emptyTodoMessage.innerText = `No todo items for ${name} yet`;
  document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
  document.getElementById("todoBody").appendChild(emptyTodoMessage);
};

// Create todo's row and append in todoBody
const createTodoRow = (todoBody, todo, project) => {
  let tr = document.createElement("tr"),
    // Create td to place buttons
    btnTd = document.createElement("td"),
    // Create the update and delete btns
    todoDeleteBtn = createTodoDeleteBtn(),
    todoUpdateBtn = createTodoUpdateBtn(todo.id);

  // Append the buttons to the td
  btnTd.appendChild(todoUpdateBtn);
  btnTd.appendChild(todoDeleteBtn);
  // Give tr an id equal to todo id
  tr.setAttribute("id", todo.id);
  // If todo is done then put a strike-through in the display of tr
  if (todo.done) {
    tr.setAttribute("class", "strikeout")
  };
  // Creating and appending td's for each respective todo properties
  ["title", "description", "dueDate", "priority", "notes", "done"].forEach(prop => {
    if (prop === "done") {
      createTodoTd(tr, todo[prop], todo, project);
    } else {
      createTodoTd(tr, todo[prop]);
    }
  });
  // Append btns' td after the rest have been appended
  tr.appendChild(btnTd);
  // Append tr to todoBody (tbody)
  todoBody.appendChild(tr);
};

//  Create button for todo update
const createTodoUpdateBtn = (id) => {
  let todoUpdateBtn = document.createElement("button");
  todoUpdateBtn.setAttribute("class", "btn btn-sm btn-warning mx-1 updateTodo");
  todoUpdateBtn.setAttribute("id", id);
  todoUpdateBtn.innerText = "Update";
  todoUpdateBtn.addEventListener("click", e => {
    e.stopPropagation();
    updateBtnCallback(e.target);
  });
  return todoUpdateBtn;
};

const updateBtnCallback = (target) => {
  let tr = target.parentNode.parentNode,
    dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),
    projectName = extractProjectName(dataID),
    todoId = target.getAttribute("id"),
    project = extractProject(projectName),
    action = "updateTodo";

  // First remove todo tr
  tr.parentNode.removeChild(tr);

  // Show todo form 
  showTodoForm(project, action, todoId);

  // Pre-fill up form with current values
  prefillTodoForm(project, todoId);
};

const prefillTodoForm = (project, todoId) => {
  let todo = project.todos.find(x => x.id == todoId),
    inputs = document.getElementsByClassName("todo-form"),
    currentDueDate = new Date(todo.dueDate);

  inputs[0].value = todo.title;
  inputs[1].value = todo.description;
  inputs[2].value = `${currentDueDate.getFullYear()}-0${currentDueDate.getMonth() + 1}-${currentDueDate.getDate()}`;
  document.getElementsByTagName("select")[0].value = todo.priority;
  inputs[3].value = todo.notes;
};

//  Create button for todo delete
const createTodoDeleteBtn = () => {
  let todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.setAttribute("class", "btn btn-sm btn-danger mx-1 deleteTodo");
  todoDeleteBtn.innerText = "Delete";
  // addDeleteListenerToBtn(todoDeleteBtn);
  todoDeleteBtn.addEventListener("click", e => {
    e.stopPropagation();
    deleteBtnCallback(e.target);
  });
  return todoDeleteBtn;
};

const deleteBtnCallback = target => {
  let dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),
    projectName = extractProjectName(dataID),
    todoId = target.parentNode.parentNode.getAttribute("id");
  todosController.delete(projectName, todoId);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
};

// Todo cell creation according to respective todo
const createTodoTd = (tr, todoProp, todo, project) => {
  let td = document.createElement("td");
  if (typeof todoProp === "boolean") {
    td.appendChild(generateDoneCheckbox(todoProp, todo, project));
  } else {
    td.innerText = todoProp;
  }
  tr.appendChild(td);
};

// Create done checkbox
const generateDoneCheckbox = (todoProp, todo, project) => {
  let inputDone = document.createElement("input");
  inputDone.setAttribute("type", "checkbox");
  if (todo.done) inputDone.setAttribute("checked", true);
  inputDone.setAttribute("value", todoProp);
  inputDone.addEventListener("change", e => {
    e.stopPropagation();
    doneCheckBoxCallBack(e.target, todo, project);
  });
  return inputDone;
}

// Update localstorage and UI after complete a todo
const doneCheckBoxCallBack = (target, todo, project) => {
  todo.done = !todo.done;
  todoDoneToggle(target, todo.done);
  [...(target.parentNode.parentNode.childNodes[6].childNodes)].forEach(node => node.toggleAttribute("disabled"));
  let todoStatus = todo.done;
  target.setAttribute("value", todoStatus);
  let index = project.todos.findIndex(x => x.id === todo.id);
  project.todos.splice(index, 1, todo);
  localStorage.setItem(project.name, JSON.stringify(project));
};

// checkbox change effect toggler
const todoDoneToggle = (target, todoDone) => {
  if (todoDone) {
    target.parentNode.parentNode.setAttribute("class", "strikeout");
  } else {
    target.parentNode.parentNode.removeAttribute("class");
  }
};