import React from 'react'
import './App.css'

import MainLanding from './MainLanding/MainLanding'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <MainLanding />
        </Route>
      </Switch>
    </div>
  )
}

export default App

