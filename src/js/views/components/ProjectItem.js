import React from 'react';

export default (props) => {
  return (
    <div>
      <span>{ props.name }</span>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
}