import React from "react";
import "../css/App.css";
import { Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf";

class Header extends React.Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  //replace chess pawn icon with logo
  render() {
    const { activeItem } = this.state;

    return (
      <div
        className="ui large fixed stackable icon menu secondary main"
        style={{ marginTop: "5vh" }}
      >
        <div className="item">
          <Icon name="chess pawn" />
        </div>

        <a className="item">
          <Icon name="home" />
          Home
        </a>
        <a className="item" href={Resume} target="_blank">
          <Icon name="file pdf outline" />
          Resume
        </a>
        <a
          className="item"
          href="https://github.com/stanleyyoang"
          target="_blank"
        >
          <Icon name="github" />
          GitHub
        </a>
      </div>
    );
  }
}

export default Header;
