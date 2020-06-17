import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';


import HomePage from './pages/homepage/HomePage'

const Hats: React.FC = () => {
  return <div>
    HATS PAGE
    </div>
} 

const App: React.FC = () => {
  return <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={Hats} />

    </Switch>
    </div>
}

export default App;
