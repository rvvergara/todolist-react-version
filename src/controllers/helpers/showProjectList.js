const showProjectList = () => {
  // show project list only if there are projects in the projectsArray
  let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
  let projectsUl = document.getElementsByTagName("ul")[0];
  if (projectsArray.length > 0) {
    // Display should show all projects in li's
    projectsArray.forEach(project => {
      let li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerText = project.name;
      projectsUl.appendChild(li);
    });
  } else {
    // The display should show "No Projects Yet"
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerText = "No projects yet, create one";
    projectsUl.appendChild(li);
  }
}

export default showProjectList;