import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import CardIndex from './components/cards/CardIndex'
import CardShow from './components/cards/CardShow'
import Header from './components/Header'

function App() {
  return ( 
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route exact path="/cards">
          <CardIndex /> 
        </Route>
        <Route exact path="/cards/game">
          <CardShow /> 
        </Route>
      </Switch> 
    </BrowserRouter> 
  )
}

export default App
