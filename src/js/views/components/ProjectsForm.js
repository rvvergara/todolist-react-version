import React from 'react';

export default (props) => {
  const {
    addProjectMode,
    submitProjectForm,
  } = props;
  const displayClass = !addProjectMode ? 'd-none' : '';
  return (
    <form
    className={displayClass}
    onSubmit={submitProjectForm}
    >
      <input type="text" placeholder="New Project Name" />
    </form>
  );
};
