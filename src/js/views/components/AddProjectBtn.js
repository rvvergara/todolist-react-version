import React from 'react';
import PropTypes from 'prop-types';

const AddProjectBtn = (props) => {
  const {
    clickAddProjectBtn,
  } = props;

  return (
    <button
      type="button"
      className="btn btn-primary mt-1"
      onClick={clickAddProjectBtn}
    >
    Add New Project
    </button>
  );
};

AddProjectBtn.propTypes = {
  clickAddProjectBtn: PropTypes.func.isRequired,
};

export default AddProjectBtn;
