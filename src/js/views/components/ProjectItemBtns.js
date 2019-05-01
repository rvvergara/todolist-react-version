import React from 'react';
import PropTypes from 'prop-types';

const ProjectItemBtns = (props) => {
  const { project, handleDeleteProject, clickUpdateProjectBtn } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-danger"
        id={`delete-${project.id}`}
        onClick={handleDeleteProject}
      >
        Delete
      </button>
      <button
        type="button"
        id={`update-${project.id}`}
        className="btn btn-sm btn-warning"
        onClick={clickUpdateProjectBtn}
      >
        Update
      </button>
    </div>
  );
};

ProjectItemBtns.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
  clickUpdateProjectBtn: PropTypes.func.isRequired,
};

export default ProjectItemBtns;
