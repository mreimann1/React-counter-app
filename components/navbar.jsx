import React, { Component } from "react";
import SideBar from "./sidebar";
// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered"); //cannot use other lifecycle hooks in component fcn
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        BulletChain{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
// same as class NavBar extends Component {

export default NavBar;
