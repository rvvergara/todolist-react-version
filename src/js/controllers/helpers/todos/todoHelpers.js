import {
  getDataFromLocalStorage,
  setDataIntoLocalStorage,
} from '../common/storage';

const parseDate = (dateStr) => {
  const currentDate = new Date(dateStr);
  const monthPrefix = currentDate.getMonth() < 10 ? '0' : '';
  const dayPrefix = currentDate.getDate() < 10 ? '0' : '';
  return `${currentDate.getFullYear()}-${monthPrefix}${currentDate.getMonth() + 1}-${dayPrefix}${currentDate.getDate()}`;
};

export const getTodoDataFromForm = (name) => {
  const inputs = document.getElementsByClassName('todo-form')[0].elements;
  const title = inputs[0].value;
  const description = inputs[1].value;
  const dueDate = parseDate(inputs[2].value);
  const priority = document.getElementsByTagName('select')[0].value;
  const notes = inputs[4].value;
  return [
    title,
    description,
    dueDate,
    priority,
    notes,
    name,
  ];
};

export const updateProjectsArray = (project) => {
  const projectsArr = getDataFromLocalStorage('projectsArray');
  const projectIndex = projectsArr.findIndex(x => x.id === project.id);
  projectsArr[projectIndex] = project;
  setDataIntoLocalStorage('projectsArray', projectsArr);
  return projectsArr;
};

export const pushTodoToProject = (todo) => {
  const parentProject = getDataFromLocalStorage(todo.project);
  parentProject.todos.push(todo);
  setDataIntoLocalStorage(todo.project, parentProject);
  updateProjectsArray(parentProject);
};

export const updateTodoInProject = (todo, project, index) => {
  const {
    todos,
  } = project;
  todos[index] = todo;
  setDataIntoLocalStorage(project.name, project);
  updateProjectsArray(project);
  return project;
};
