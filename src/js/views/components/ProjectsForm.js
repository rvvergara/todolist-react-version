import React from 'react';
import PropTypes from 'prop-types';

const ProjectsForm = (props) => {
  const {
    handleChange,
    submitProjectForm,
    name,
    error,
  } = props;
  return (
    <div>
      {error && (
      <div>
        { error }
      </div>
      )}
      <form
        onSubmit={submitProjectForm}
      >
        <input
          className="form-control"
          type="text"
          name="projectName"
          value={name}
          onChange={e => handleChange(e.target.name, e.target.value)}
          placeholder="New Project Name"
        />
      </form>
    </div>
  );
};

ProjectsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitProjectForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default ProjectsForm;
