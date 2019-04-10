import React from 'react';

export default (props) => {
  const {
    selectedProject,
  } = props;
  return (
    <div>
      <h2>
        Todo list for&nbsp;
        {selectedProject.name}
      </h2>
    </div>
  );
};
