import React from 'react';
import ProjectsForm from './ProjectsForm';

const ProjectItem = (props) => {
  const {
    name, id, handleSelectProject,
  } = props;
  return (
    <div
      id={id}
      onClick={handleSelectProject}
    >
      {name}
      <div className="actions">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProjectItem;
