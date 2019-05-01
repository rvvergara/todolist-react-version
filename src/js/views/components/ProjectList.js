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
  componentWillMount() {
    const {
      getProjects,
      selectProject,
    } = this.props;
    const projectsArray = getDataFromLocalStorage('projectsArray');
    if (projectsArray) {
      getProjects(projectsArray);
      selectProject(projectsArray[0].name);
    }
  }

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
            />
          ))
        }
        </div>
        <AddNewProject />
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
