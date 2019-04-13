import React from 'react';
import PropTypes from 'prop-types';

const AddTodoBtn = (props) => {
  const {
    handleTodoBtn,
    addTodoMode,
  } = props;
  const displayClass = !addTodoMode ? 'btn btn-primary btn-block' : 'd-none';
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
};

export default AddTodoBtn;