import "./Navbar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSideNavSelect = this.handleSideNavSelect.bind(this);
    this.state = {
      sideNavInstance: null
    };
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      const el = document.querySelector(".sidenav");
      const instance = M.Sidenav.init(el, {
        inDuration: 350,
        outDuration: 350,
        draggable: true
      });
      this.setState({
        sideNavInstance: instance
      });
    });
  }

  handleSideNavSelect(e) {
    e.preventDefault();
    const instance = this.state.sideNavInstance;
    instance.close();
  }

  render() {
    const photos = "PHOTOS";
    const contact = "CONTACT";
    const samples = "SAMPLES";
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <NavLink
              to="/"
              name="photos"
              className="nav-link"
              onClick={this.handleSideNavSelect}
            >
              {photos}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              name="contact"
              className="nav-link"
              onClick={this.handleSideNavSelect}
            >
              {contact}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              name="samples"
              className="nav-link"
              onClick={this.handleSideNavSelect}
            >
              {samples}
            </NavLink>
          </li>
        </ul>
        <nav className="nav-wrapper black nav-text">
          <div className="container">
            <div className="brand-logo left" style={{ position: "relative" }}>
              Volume IV
            </div>
            <a
              className="sidenav-trigger nav-link right"
              data-target="slide-out"
            >
              <i className="material-icons" style={{ cursor: "pointer" }}>
                menu
              </i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/" className="nav-link">
                  {photos}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  {contact}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  {samples}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
