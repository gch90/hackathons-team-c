import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar, Loading } from '../components'
import { Landing, Enigma, Game, Form } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/global-style.css'

// <Loading />

const App = () => {
  return (
    <Router>
      
      <NavBar />
      <Switch>
        <Route 
          path="/"
          exact
          component={Landing} 
        />
        <Route 
          path="/enigma" 
          exact 
          component={Enigma} 
        />
        <Route 
          path="/game" 
          exact 
          component={Game} 
        />
        <Route
          path="/form"
          exact
          component={Form}
        />
      </Switch>
    </Router>
  )
}

export default App
