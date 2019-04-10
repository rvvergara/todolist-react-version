import React from 'react';
class ProjectItem extends React.Component {
  state = {
    todos: [],
  }
  render(){
    return (
      <div>
        <span>{ this.props.name }</span>
        <button>Delete</button>
        <button>Update</button>
      </div>
    )
  }
};

export default ProjectItem;