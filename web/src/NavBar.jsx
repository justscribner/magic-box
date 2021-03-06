import React, { Component } from "react";
import { Link } from "react-router-dom";
import { paths } from "./Routes.jsx";
import "./styles.scss";

class NavBar extends Component {
  state = {
    selectedRoute: paths.HOME
  };

  onClick = path => {
    this.setState({ selectedRoute: path });
  };

  render = () => {
    return (
      <div className="ui sticky inverted vertical menu">
        <div
          className="item"
          style={{ backgroundColor: "#42c6ff", display: "block" }}
        >
          <img src="assets/logo.svg" style={{ height: 70, width: 70 }} />
          <div className="iconTitle">EMOTIONAL JAMSEL</div>
        </div>
        {Object.entries(paths).reduce((buttons, [name, route]) => {
          buttons.push(
            <NavButton
              onClick={this.onClick.bind(this)}
              key={name}
              name={name}
              route={route}
            />
          );
          return buttons;
        }, [])}
      </div>
    );
  };
}

const NavButton = ({ onClick, name, route }) => {
  const iconPath = `assets/${name.toLowerCase()}.svg`;
  return (
    <Link className="item" to={route}>
      <img src={iconPath} style={{ height: 80, width: 80 }} />
      <div className="NavBarItemLabel">{name}</div>
    </Link>
  );
};

export default NavBar;
