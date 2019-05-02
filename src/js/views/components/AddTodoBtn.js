import React from 'react';
import PropTypes from 'prop-types';

const AddTodoBtn = (props) => {
  const {
    handleTodoBtn,
  } = props;

  return (
    <button
      type="button"
      className="btn btn-primary btn-block"
      onClick={handleTodoBtn}
    >
    Add Todo
    </button>
  );
};

AddTodoBtn.propTypes = {
  handleTodoBtn: PropTypes.func.isRequired,
};

export default AddTodoBtn;
