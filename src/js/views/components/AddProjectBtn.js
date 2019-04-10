import React from 'react';

export default (props) => {
  const {
    addOrEditProject,
    clickAddProjectBtn,
  } = props;
  const displayClass = !addOrEditProject ? '' : 'd-none'
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
