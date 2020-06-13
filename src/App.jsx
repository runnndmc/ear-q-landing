import React from 'react'
import './App.css'
import Products from './components/Products/Products'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default App