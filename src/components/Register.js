import React, { Component } from 'react'
import UserModel from '../models/user'

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

  // handles submit event when the user submits the form: handleSubmit()
  handleSubmit = (event) => {
    // stop the default form event from firing
    event.preventDefault()
    // make an axios call to the API register route
    UserModel.create(this.state)
      .then(res => {
        this.setState({
          first_name: '',
          last_name: '',
          password: '',
          email: ''
        })
        this.props.history.push('/login')
      })
      .catch(err => console.log(err))
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

export default Register;
