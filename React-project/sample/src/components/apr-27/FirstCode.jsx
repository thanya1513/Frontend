import React from "react";
import ThreeCode from "./ThreeCode";

function FirstCode(props) {
  // console.log("props value", props);
  const { name } = props; // object destructuring
  return (
    <div>
      <h1 className="heading">My First Code </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
        molestias animi cupiditate nesciunt, praesentium ex amet unde provident
        vero vel ipsam, perferendis quaerat commodi est accusamus. Quo fuga
        eveniet tenetur.
      </p>
    </div>
  );
}

export default FirstCode;
