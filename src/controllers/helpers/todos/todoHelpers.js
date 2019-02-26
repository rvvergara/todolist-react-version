import {
  showTodoBody
} from './todoBody';

import todosController from "../../todosController";

import {
  extractProject,
  extractProjectName
} from './todoBody';



export const generateAddTodoBtn = project => {
  // If there's an existing addTodoBtn remove it first
  let btn = createAddTodoBtn(project);
  appendAddTodoBtn(btn, project);
  // Also set to invisible any addTodoForm
  if (document.getElementById("todosSection").getAttribute("class") !== "d-none") {
    document.getElementById("todosSection").setAttribute("class", "d-none");
  }
};

const createAddTodoBtn = project => {
  let btn = document.createElement("button"),
    action = "newTodo";
  btn.setAttribute("class", "btn btn-sm btn-block btn-primary addTodoBtn");
  btn.setAttribute("id", `addTodoBtn-${project.id}`);
  btn.setAttribute("data-id", project.id);
  btn.innerText = `Add Todo for ${project.name}`;
  btn.addEventListener("click", e => {
    e.stopPropagation();
    addTodoClickCallback(e.target, project, action);
  });
  return btn;
};

export const addTodoClickCallback = (target, project, action) => {
  document.getElementById("todosDiv").removeChild(target);
  showTodoForm(project, action);
};

export const showTodoForm = (project, action, todoId) => {
  let todoForm = document.getElementById("todosForm");
  todoForm.setAttribute("data-id", project.id);
  if (todoId !== undefined) {
    todoForm.setAttribute("data-update", todoId);
  }
  document.getElementById("todosSection").setAttribute("class", "mt-3");
  document.getElementById("todosForm").setAttribute("data-action", action);
};

const appendAddTodoBtn = (btn, project) => {
  if (document.getElementsByClassName("addTodoBtn")[0]) {
    document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]);
  }
  if (document.getElementById(`addTodoBtn-${project.id}`) === null) {
    document.getElementById("todosDiv").appendChild(btn);
  }
};

export const submitTodoCallBack = target => {
  let projectsArray = JSON.parse(localStorage["projectsArray"]),
    index = Number(target.getAttribute("data-id")),
    project = projectsArray.find(x => x.id === index),
    todoData = getTodoDataFromForm(project.name),
    dataAction = target.getAttribute("data-action");
  if (dataAction === "newTodo") {
    todosController.create(...todoData);
  } else {
    updateTodo(target);
  }

  target.reset();
  document.getElementById("todosSection").setAttribute("class", "d-none");
  showTodoBody(project.name);
  generateAddTodoBtn(project);
};

const updateTodo = target => {
  let todoId = Number(target.getAttribute('data-update')),
    dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),
    projectName = extractProjectName(dataID),
    project = extractProject(projectName);
  todosController.update(project, todoId, projectName);
};

export const getTodoDataFromForm = name => {
  let inputs = document.getElementsByClassName("todo-form"),
    title = inputs[0].value,
    description = inputs[1].value,
    dueDate = new Date(inputs[2].value).toDateString(),
    priority = document.getElementsByTagName("select")[0].value,
    notes = inputs[3].value;
  return [
    title,
    description,
    dueDate,
    priority,
    notes,
    name
  ];
};