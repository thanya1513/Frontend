import React, { Component } from "react";

class Mobile extends Component {
  // class component
  constructor() {
    super();
    this.state = { age: 20 }; // diff state:data in the component and props:data passed from one component to other
  }
  render() {
    console.log("props", this.props);
    const { name, city } = this.props;
    return (
      <div>
        {/*<h1>Heading One</h1> */}
        {/*<h1>Name: {this.props.name}</h1>*/}
        {/*<h3>City: {this.props.city}</h3>*/}
        <h1>Name: {name}</h1>
        <h3>City: {city}</h3>
        <h3>Age: {this.state.age}</h3>
      </div>
    );
  }
}

export default Mobile;
