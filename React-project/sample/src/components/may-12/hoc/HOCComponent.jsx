import React from "react";

function HOCComponent(Wrapper) {
  return function NewComponent(props) {
    return (
      <div className="hoc">
        <Wrapper {...props} />
      </div>
    );
  };
}

export default HOCComponent;

// high order component(hoc) = passing the component as an argument to another component to get updated component
