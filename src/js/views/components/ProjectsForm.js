import React from 'react';

const ProjectsForm = (props) => {
  const {
    addProjectMode,
    handleChange,
    submitProjectForm,
    editProjectMode,
    name,
  } = props;
  const displayClass = addProjectMode || editProjectMode ? '' : 'd-none';
  return (
    <div>
      <div>
        Invalid Project Name
      </div>
      <form
        className={displayClass}
        onSubmit={submitProjectForm}
      >
        <input
          className="form-control"
          type="text"
          name="projectName"
          value={name}
          onChange={e => handleChange(e.target.name, e.target.value)}
          placeholder={name || 'New Project Name'}
        />
      </form>
    </div>
  );
};

export default ProjectsForm;
