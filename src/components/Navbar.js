import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar bg-dark border-bottom border-bottom-dark"
          data-bs-theme="dark"
        >
          <div className="container-fluid d-flex flex-row">
            <img
              src="favicon.ico"
              alt="logo"
              style={{ height: "40px", width: "45px", marginRight: "-1000px" }}
            />
            <a className="navbar-brand" href="/">
              ScienceWizz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
