import React from 'react'
import './App.css'

import MainLanding from './MainLanding/MainLanding'
import Hero from './components/Hero/Hero'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <MainLanding />
          <Hero />
        </Route>
      </Switch>
    </div>
  )
}

export default App

