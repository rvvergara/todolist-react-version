import Project from '../models/project';

const projectsController = (
  () => {
    return {
      create(name) {
        let project = new Project(name);
        localStorage.setItem(name, JSON.stringify(project));
        return project;
      },
      update() {

      },
      delete(name) {
        localStorage.removeItem(name);
      }

    };
  }
)();

export default projectsController;