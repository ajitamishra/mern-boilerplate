import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">ExerTracker</Link>
        <div>
          <ul>
            <li>
              <Link to="/">Exercises</Link>
            </li>
            <li>
              <Link to="/create">Create Exercises log</Link>
            </li>
            <li>
              <Link to="/user">Create user</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
