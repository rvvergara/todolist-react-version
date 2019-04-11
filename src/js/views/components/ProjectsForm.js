import React from 'react';

export default (props) => {
  const {
    addProjectMode,
    submitProjectForm,
    editProjectMode,
    name,
  } = props;
  const displayClass = addProjectMode || editProjectMode ? '' : 'd-none';
  return (
    <form
    className={displayClass}
    onSubmit={submitProjectForm}
    >
      <input
      type="text"
      defaultValue={name}
      placeholder={name || "New Project Name"}
      />
    </form>
  );
};
