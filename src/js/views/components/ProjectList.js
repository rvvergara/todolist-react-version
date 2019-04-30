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
  getDataFromLocalStorage
} from '../../controllers/helpers/common/storage';
export class ProjectList extends React.Component {
  handleSelectProject = (e) => {
    const {projects, selectProject} = this.props;
    const project = projects.find( project => project.id === e.target.id);
    selectProject(project.name);
  }

  componentWillMount(){
    const {
      getProjects,
      selectProject,
    } = this.props;
    const projectsArray = getDataFromLocalStorage('projectsArray');
    if(projectsArray){
      getProjects(projectsArray);
      selectProject(projectsArray[0].name);
    }
  }

  render(){
      return (
    <div>
      <h2>Project List</h2>
      <div>
        {
          this.props.projects.map(project => (
            <ProjectItem 
              key={project.id}
              name={project.name}
              id={project.id}
              handleSelectProject={this.handleSelectProject}
            />
          ))
        }
      </div>
      <AddNewProject />
    </div>
  );
  }
};

const mapStateToProps = state => ({
  projects: state.projects,
  selectedProject: state.selectedProject,
});

export default connect(mapStateToProps, { getProjects, selectProject })(ProjectList);


ProjectList.propTypes = {
  projects: PropTypes.arrayOf(Object).isRequired,
  selectedProject: PropTypes.string.isRequired,
  getProjects: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired,
};