import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../containers/List'
import Login from '../containers/Login'
import Register from '../containers/Register'

export default (props) => (
  <Switch>
    <Route exact path="/" component={ Home } />

    <Route path="/login" render={ (routeProps) => {

      return <Login  { ...routeProps } /> 
    } } />
    <Route path="/register" component={ Register } />
  </Switch>
)