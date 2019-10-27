import React, { Component } from "react";
import homepageBackgroundPicture from "../../../static/assets/images/home/code-background.jpg";

export default class HomepageContainer extends Component {
  constructor() {
  super();
  }
  
  render() {
    return (
      <div
        className="homepage-wrapper"
        style={{
          background: "url(" + homepageBackgroundPicture + ") no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="homepage">
          <div className="home-block">
            <h1>Phillip Woolf</h1>
          </div>
          <div className="welcome-text">
            <p>
              Welcome to my website! Make sure to check out my portfolio and
              blog pages.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
