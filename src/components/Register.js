import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/authAction'

class Register extends Component {
  state = {
    // store the default values for the fields in the register form
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  }

  // handles changes made to the form fields: handleChange()
  handleChange = (event) => {
    // console.log(event)
    // set state with the value from the input
    this.setState({
        [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    
    event.preventDefault()
    this.props.register(this.state)
    this.props.history.push('/login')

  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Register</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"> First Name</label>
                <input 
                    onChange={this.handleChange} 
                    className="form-control form-control-lg" 
                    type="text" 
                    id="name" 
                    name="first_name" 
                    value={this.state.first_name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="name"  name="last_name" value={this.state.last_name} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email"  name="email" value={this.state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="name"  name="password" value={this.state.password} />
              </div>

              <button className="btn btn-primary float-right" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    data : state.data
  }
}
const mapDispactToProps = (dispatch) => {
  return {
    register : (props) => dispatch(actions.registerAction(props))
  }
}

export default connect(mapStateToProps,mapDispactToProps)(Register)
