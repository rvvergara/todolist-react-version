import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getProjects,
  addProject,
} from '../actions/projects';
import { selectProject } from '../actions/selectedProject';
import projectsController from '../../controllers/projectsController';
import ProjectItem from './ProjectItem';
import AddProjectBtn from './AddProjectBtn';
import ProjectsForm from './ProjectsForm';

export class ProjectList extends React.Component {
  state = {
    addProjectMode: false,
    error: '',
    projectName: '',
  };

  handleClickAddBtn = () => {
    this.setState({
      addProjectMode: true,
    });
  };

  handleChange = (key, val) => this.setState({
    [key]: val,
  });

  handleSubmitProjectForm = (e) => {
    e.preventDefault();
    const { addProject } = this.props;
    const name = this.state.projectName;
    const isValid = this.validateName(name);
    if(isValid && name){
      this.setState({
        addProjectMode: false
      });
      const newProject = addProject({name});
      projectsController.create(name, newProject.project.id);
      e.target.reset();
    } else {
      this.setState({
        error: 'You have entered a duplicate or invalide name'
      });
    }
  };

  validateName = name => {
    const {projects} = this.props;
    return projects.findIndex(project => project.name === name) === -1; 
  };

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
    const json = localStorage.projectsArray;
    if(json){
      const projectsArray = JSON.parse(json);
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
      <div>
        <AddProjectBtn 
          addProjectMode={this.state.addProjectMode}
          clickAddProjectBtn={this.handleClickAddBtn}
        />
        <ProjectsForm 
          addProjectMode={this.state.addProjectMode}
          submitProjectForm={this.handleSubmitProjectForm}
          handleChange={this.handleChange}
        />
      </div>
    </div>
  );
  }
};

const mapStateToProps = state => ({
  projects: state.projects,
  selectedProject: state.selectedProject,
});

export default connect(mapStateToProps, { getProjects, addProject, selectProject })(ProjectList);


ProjectList.propTypes = {
  projects: PropTypes.arrayOf(Object).isRequired,
  selectedProject: PropTypes.string.isRequired,
  getProjects: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired,
};