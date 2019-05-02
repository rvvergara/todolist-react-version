import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getProjects,
} from '../actions/projects';
import { selectProject } from '../actions/selectedProject';
import ProjectItem from './ProjectItem';
import AddNewProject from './AddNewProject';
import {
  getDataFromLocalStorage,
} from '../../controllers/helpers/common/storage';

export class ProjectList extends React.Component {
  state = {
    projects: this.props.projects,
  }
  componentWillMount() {
    const {
      getProjects,
      selectProject,
    } = this.props;
    const projectsArray = getDataFromLocalStorage('projectsArray');
    if (projectsArray) {
      const newProjects = getProjects(projectsArray);
      selectProject(projectsArray[0]);
      this.setState({
        projects: newProjects.projects,
      })
    }
  };

  addNewProject = (project) => {
    this.setState(prevState => ({
      projects: [...prevState.projects ,project],
    }));
  }

  handleDeleteProject = (id) => {
    this.setState((prevState) => {
      const newProjects = prevState.projects.filter(project => project.id !== id);
      const newSelectedProj = newProjects.length > 0 ? newProjects[newProjects.length - 1] : { };
      this.props.selectProject(newSelectedProj);
      return {
        projects: newProjects,
      }
    });
  };

  render() {
    const {
      projects,
    } = this.props;
    return (
      <div>
        <h2>Project List</h2>
        <div>
          {
          projects.map(project => (
            <ProjectItem
              project={project}
              key={project.id}
              handleDeleteProject={this.handleDeleteProject}
            />
          ))
        }
        </div>
        <AddNewProject 
        addNewProject={this.addNewProject}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  selectedProject: state.selectedProject,
});

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(Object).isRequired,
  getProjects: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getProjects, selectProject })(ProjectList);
