import React from 'react';
import ProjectsForm from './ProjectsForm';
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
      deleteProject,
      selectProject,
    } = this.props;
    const regular = (
      <div onClick={selectProject}>
        <span>{ name }</span>
        <button
          id={`delete-proj-${dataID+1}`}
          onClick={deleteProject}
        >
          Delete
        </button>
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