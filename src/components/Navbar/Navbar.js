import "./Navbar.scss";
import React from "react";
import { NavLink, Redirect, Link, withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSideNavSelect = this.handleSideNavSelect.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
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

  handleLogoClick() {
    this.props.history.push("/");
  }

  handleSideNavSelect(e) {
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
              to="/photos"
              name="photos"
              className="nav-link"
              onClick={this.handleSideNavSelect}
            >
              {photos}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              name="contact"
              className="nav-link"
              onClick={this.handleSideNavSelect}
            >
              {contact}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/samples"
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
              <div className="nav-img-container" onClick={this.handleLogoClick}>
                <img
                  className="logo-img"
                  src="https://firebasestorage.googleapis.com/v0/b/volume-iv.appspot.com/o/header-image%2FvolFourLogo.jpg?alt=media&token=5ccfcc89-603a-4e84-93d3-25c4fdf47aaf"
                />
              </div>
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
                <NavLink to="/photos" className="nav-link">
                  {photos}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">
                  {contact}
                </NavLink>
              </li>
              <li>
                <NavLink to="/samples" className="nav-link">
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

export default withRouter(Navbar);
