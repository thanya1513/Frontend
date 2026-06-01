import React, { Component } from "react";
import "./Mobileview.css";

class Mobileview extends Component {
  render() {
    console.log("props in the mobile", this.props);
    let { mobiles } = this.props;

    let mobile = mobiles.map((value) => {
      return (
        <div className="main">
          <div className="section-one">
            <img className="mobile-image" src={value.url} />
          </div>
          <div className="section-two">
            <h1>{value.name}</h1>
            <p className="para">{value.about}</p>
            <div>
              <button className="book">Buy Now</button>
              <button className="book">Add to Watchlist</button>
            </div>
          </div>
        </div>
      );
    });
    return <div>{mobile}</div>;
  }
}

export default Mobileview;
