import React from 'react';

export default (props) => {
  const {
    addProjectMode,
    clickAddProjectBtn,
  } = props;
  const displayClass = !addProjectMode ? 'btn btn-primary mt-1' : 'd-none';
  return (
    <button
      type="button"
      className={displayClass}
      onClick={clickAddProjectBtn}
    >
    Add New Project
    </button>
  );
};
