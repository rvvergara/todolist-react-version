import React from 'react';
import PropTypes from 'prop-types';

const AddProjectBtn = (props) => {
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

AddProjectBtn.propTypes = {
  addProjectMode: PropTypes.func.isRequired,
  clickAddProjectBtn: PropTypes.func.isRequired,
};

export default AddProjectBtn;
