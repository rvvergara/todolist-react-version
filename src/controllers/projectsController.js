import Project from '../models/project';

const projectsController = (
  ()=>{
    return {
      create(name){
        let project = new Project(name);
        localStorage.setItem(name, JSON.stringify(project));
        // console.log(localStorage.getItem(name));
      },
      update(){

      },
      delete(name){
        localStorage.removeItem(name);
      }

    };
  }
)();

export default projectsController;