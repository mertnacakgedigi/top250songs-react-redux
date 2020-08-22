import React, { useState } from 'react'
import {connect} from "react-redux"
import * as actions from '../store/actions/authAction'
import { useHistory } from 'react-router-dom';

function Login (props) {
  const [state,setState] = useState({
    email: '',
    password: '',
  })

  let handleChange = (event) => {
      setState({
        ...state,
      [event.target.name]: event.target.value,
    })
  }

  const history = useHistory();
  
  let handleSubmit = (event) => {
    props.login(state)
    history.push('/')
  }

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Login</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input onChange={handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={state.password} />
              </div>
              <button className="btn btn-primary float-right" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    data : state.data
  }
}

const mapDispactToProps = (dispatch) => {
  return {
    login : (props) => dispatch(actions.loginAction(props)),
  }
}

export default connect(mapStateToProps,mapDispactToProps)(Login)