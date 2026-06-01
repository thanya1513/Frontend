import React from "react";

function Movies(props) {
  console.log("props is", props);

  //map will iterate through each object and prints the images
  let moviePage = props.moviesData.map((value) => {  
    return (
      <div>
        <img src={value.imageUrl} />
      </div>
    );
  });
  return <div>{moviePage}</div>;
}

export default Movies;
