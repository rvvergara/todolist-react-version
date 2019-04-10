import React from 'react';

export default (props) => {
  const {
    addOrEditProject
  } = props;
  const displayClass = !addOrEditProject ? 'd-none' : '';
  return (
    <form className={displayClass}>
      <input type="text" placeholder="New Project Name" />
    </form>
  )
}