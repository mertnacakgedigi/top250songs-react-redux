import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import * as actions from "../store/actions/authAction"

const Navbar = (props) => {

  const logout = event => {
    event.preventDefault()
    props.logoutAction()
  }
 
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand"  to="/">Top250Songs</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
            { props.currentUser ?
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={logout}>Logout</a>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                </>
            }
            </ul>
          </div>
        </div>
        </nav>
    );
}

const mapStoreToProps = (store) => {

  return {
    currentUser : store.authReducer.currentUser
  }
}

const mapDispactToProps = (dispatch) => {
  return {
    logoutAction : (e) => dispatch(actions.logoutAction(e))
  }
}

export default connect(mapStoreToProps,mapDispactToProps)(Navbar);
