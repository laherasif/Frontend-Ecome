import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-menu"
              aria-controls="main-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href="./">
              <img src="images/logo.png" alt="Logo" />
            </a>
            <a className="navbar-brand hidden" href="./">
              <img src="images/logo2.png" alt="Logo" />
            </a>
          </div>
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/dashboard">
                  <i className="menu-icon fa fa-dashboard" />
                  Dashboard
                </Link>
              </li>
              <h3 className="menu-title">UI elements</h3>
              {/* /.menu-title */}
              <li className="menu-item-has-children dropdown">
                <Link
                  to="/addproduct"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="menu-icon fa fa-laptop" />
                  Product
                </Link>
                
              </li>
              <li className="menu-item-has-children dropdown">
                <Link
                  to="/viewproduct"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="menu-icon fa fa-laptop" />
                  View Product
                </Link>
                
              </li>
              
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
      </aside>
    </div>
  );
}
