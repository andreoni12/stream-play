import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GameInfo from './components/GameInfo';
import Home from './components/Home';
import Profile from './components/Profile';


export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/games/:id" render={({ match }) => (
            <GameInfo id={match.params.id} />
          )} />
        </Switch>
      </div>
    )
  }
}
