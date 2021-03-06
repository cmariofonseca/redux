import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends React.Component {
  render() {
    return(
      <ul className="right">
        <li>
          <NavLink to="/create">New project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighteh-1">NN</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;