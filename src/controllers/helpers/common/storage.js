const getDataFromLocalStorage = key => JSON.parse(localStorage.getItem(key));
const setDataIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export {
  getDataFromLocalStorage,
  setDataIntoLocalStorage,
};