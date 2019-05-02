import React from 'react';
import PropTypes from 'prop-types';

const AddTodoBtn = (props) => {
  const {
    handleTodoBtn,
    addTodoMode,
    editTodoMode,
  } = props;
  const displayClass = addTodoMode || editTodoMode ? 'd-none' : 'btn btn-primary btn-block';
  return (
    <button
      type="button"
      className={displayClass}
      onClick={handleTodoBtn}
    >
    Add Todo
    </button>
  );
};

AddTodoBtn.propTypes = {
  handleTodoBtn: PropTypes.func.isRequired,
  addTodoMode: PropTypes.bool.isRequired,
  editTodoMode: PropTypes.bool.isRequired,
};

export default AddTodoBtn;
