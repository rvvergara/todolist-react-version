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

  render(){
    const {
      name,
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
      editProjectMode={this.state.editProjectMode}
      name={name}
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