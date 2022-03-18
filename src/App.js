import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route
          path="/game"
          render={ (props) => <Game { ...props } /> }
        />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}
