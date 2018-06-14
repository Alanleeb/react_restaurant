import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Item from './components/Item'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/items/:id" component={Item} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App
