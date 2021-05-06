import React from 'react'
import './App.css'
import Products from './screens/Products/Products'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/products/:id" component={ProductDetail} />
        <>hello ear q!!</>
      </Switch>
    </div>
  )
}

export default App

//const App = () => {
//  
//}