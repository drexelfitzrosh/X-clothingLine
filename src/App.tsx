import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';


import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'
import Auth from './pages/auth/auth'

const App: React.FC = () => {
  return <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={Auth} />

    </Switch>
    </div>
}

export default App;
