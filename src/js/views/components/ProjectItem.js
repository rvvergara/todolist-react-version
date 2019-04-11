import React from 'react';
import ProjectsForm from './ProjectsForm';
import projectsController from '../../controllers/projectsController';
class ProjectItem extends React.Component {
  state = {
    todos: [],
    editProjectMode: false,
  }

  clickUpdateProjectBtn = () => {
    this.setState(() => ({
      editProjectMode: true,
    }));
  }


  submitProjectForm = (e) => {
    e.preventDefault();
    const id = Number(e.target.getAttribute('data-id'));
    this.props.updateProjectForm(id);
    this.setState(() => ({
      editProjectMode: false,
    }));
    e.target.reset();
  }

  render(){
    const {
      name,
      dataID,
    } = this.props;
    const regular = (
      <div>
        <span>{ name }</span>
        <button>Delete</button>
        <button
        onClick={this.clickUpdateProjectBtn}
        >
        Update
        </button>
      </div>
    );
    const editMode = (
      <ProjectsForm
      dataID={dataID+1}
      editProjectMode={this.state.editProjectMode}
      name={name}
      submitProjectForm={this.submitProjectForm}
      />
    )
    if (this.state.editProjectMode){
      return editMode
    }else{
      return regular
    }
  }
};

export default ProjectItem;