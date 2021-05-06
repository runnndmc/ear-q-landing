import React from 'react'
import './App.css'

import FirstSell from './components/FirstSell/FirstSell'
import SecondSell from './components/SecondSell/SecondSell'
import Hero from './components/Hero/Hero'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <FirstSell />
          <Hero />
          <SecondSell />
        </Route>
      </Switch>
    </div>
  )
}

export default App

