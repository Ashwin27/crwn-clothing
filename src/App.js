import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/crwn-clothing" component={HomePage}/>
        <Route path="/crwn-clothing/shop" component={ShopPage}/>
        <Route path="/crwn-clothing/shop/hats" component={HatsPage}/>
        <Route path="/crwn-clothing/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
